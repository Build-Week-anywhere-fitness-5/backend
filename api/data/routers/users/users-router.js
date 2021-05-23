const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const { validateRegister, checkUsernameFree } = require("./users-middleware");

const router = express.Router();

router.get("/api/users", async (req, res, next) => {
  try {
    const allUsers = await Users.find();
    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/api/auth/register",
  validateRegister,
  checkUsernameFree,
  async (req, res, next) => {
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
      res.status(201).json(newUser[0]);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/api/auth/login", async (req, res, next) => {
  try {
    const dbPass = await Users.findByUsername(req.body.username);
    //console.log(dbPass);
    const bodyPass = req.body.password;

    if (!dbPass[0]) {
      return res.status(401).json({
        message: "Incorrect username",
      });
    }

    const passwordValidation = await bcrypt.compare(
      bodyPass,
      dbPass[0].password
    );

    if (!passwordValidation) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      {
        username: dbPass[0].username,
        user_id: dbPass[0].user_id,
        successfulLogin: true,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.status(200).json({
      message: `Welcome ${req.body.username}`,
      username: dbPass[0].username,
      role: dbPass[0].role,
      token: token,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
