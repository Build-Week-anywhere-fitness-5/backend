const jwt = require("jsonwebtoken");
const db = require("./classes-model");

function restrict(role) {
  const roleScale = ["client", "instructor"];

  return async (req, res, next) => {
    try {
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).json({
            message: "Invalid credentials",
          });
        }

        if (
          role &&
          roleScale.indexOf(decoded.userRole) < roleScale.indexOf(role)
        ) {
          return res.status(403).json({
            message: "You are not allowed here",
          });
        }

        // make the token's payload available to other middleware functions
        req.token = decoded;

        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

function checkClassPayload(req, res, next) {
  const { class_name, date, start_time, location, duration_mins } = req.body;

  if (!class_name || !date || !start_time || !location) {
    return res.status(400).json({
      message: "class name, date, start time, and location are required",
    });
  }
  if (typeof duration_mins !== "number") {
    return res.status(400).json({ message: "Duration must be a number" });
  }

  next();
}

async function checkClassId(req, res, next) {
  const { class_id } = req.params;

  try {
    const classID = await db.getClassById(class_id);
    if (!classID) {
      res.status(404).json({
        message: "Class ID not found",
      });
    } else {
      req.classID = classID;
      next();
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  restrict,
  checkClassPayload,
  checkClassId,
};
