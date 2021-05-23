const db = require("./users-model");

function validateRegister(req, res, next) {
  const { role } = req.body;

  if (!role || role === "") {
    return res.status(400).json({ message: "Role of user is missing" });
  }
  next();
}

async function checkUsernameFree(req, res, next) {
  try {
    const allUsers = await db.find();
    allUsers.map((user) => {
      if (user.username === req.body.username) {
        return res
          .status(422)
          .json({ message: "This username is already taken" });
      }
    });

    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateRegister,
  checkUsernameFree,
};
