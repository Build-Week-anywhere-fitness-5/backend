const express = require("express");
//const bcrypt = require("bcryptjs")
//const jwt = require("jsonwebtoken")
const Classes = require("./classes-model");
//const { restrict } = require("./users-middleware")

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allClasses = await Classes.getClasses();
    res.status(200).json(allClasses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
