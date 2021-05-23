const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const {
  checkUsernameFree,
  checkUsernameExists,
} = require("./users-middleware");

const router = express.Router();

router.get("/api/users", async (req, res, next) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
});

router.post("/api/auth/register", checkUsernameFree, async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const newUser = await Users.add({
      username,
      password: await bcrypt.hash(
        password,
        parseInt(process.env.BCRYPT_TIME_COMPLEXITY)
      ),
      role,
    });
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/api/auth/login", checkUsernameExists, async (req, res, next) => {
  try {
    const dbPass = await Users.findByUsername(req.body.username);
    const bodyPass = req.body.password;
    const passwordValidation = await bcrypt.compare(bodyPass, dbPass.password);
    if (passwordValidation === false) {
      return res.status(401).json({ message: "invalid credentials" });
    }

    const token = jwt.sign(
      {
        userID: dbPass.user_id,
        userRole: dbPass.role,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.status(200).json({
      message: `Welcome ${req.body.username}`,
      token: token,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
