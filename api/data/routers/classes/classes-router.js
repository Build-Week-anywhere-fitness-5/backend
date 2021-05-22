const express = require("express");
const Classes = require("./classes-model");

const router = express.Router();

router.get("/api/classes", async (req, res, next) => {
  try {
    const allClasses = await Classes.getClasses();
    res.status(200).json(allClasses);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
