const express = require("express");
const Classes = require("./classes-model");
const {
  restrict,
  checkClassPayload,
  checkClassId,
} = require("./classes-middleware");

const router = express.Router();

router.get("/api/classes", async (req, res, next) => {
  try {
    const allClasses = await Classes.getClasses();
    res.status(200).json(allClasses);
  } catch (err) {
    next(err);
  }
});

router.get("/api/class/:class_id", checkClassId, async (req, res) => {
  res.status(200).json(req.classID);
});

router.post(
  "/api/classes",
  restrict("instructor"),
  checkClassPayload,
  async (req, res, next) => {
    try {
      const newClass = await Classes.add(req.body);
      res.status(201).json(newClass);
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/api/class/:class_id",
  restrict("instructor"),
  checkClassId,
  async (req, res, next) => {
    const { class_id } = req.params;
    try {
      const updatedclass = await Classes.updateById(class_id, req.body);
      res.status(200).json(updatedclass);
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/api/class/:class_id",
  restrict("instructor"),
  checkClassId,
  async (req, res, next) => {
    const { class_id } = req.params;

    try {
      const deleted = await Classes.deleteById(class_id);
      res.status(200).json(deleted);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
