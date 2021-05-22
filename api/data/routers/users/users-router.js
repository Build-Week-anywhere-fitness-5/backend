const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const {
  checkUsernameFree,
  checkUsernameExists,
} = require("./users-middleware");

const router = express.Router();

router.post("/api/auth/register", checkUsernameFree, async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    console.log(req.body);
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
    const { username, password } = req.body;
    const user = await Users.findByUsername(username);

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      {
        userID: user.id,
        userRole: user.role,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.json({
      message: `Welcome ${user.username}!`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
