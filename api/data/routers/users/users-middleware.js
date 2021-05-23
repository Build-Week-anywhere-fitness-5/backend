const db = require("./users-model");

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
  checkUsernameFree,
};
