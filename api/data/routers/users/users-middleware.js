const db = require("./users-model");

async function checkUsernameFree(req, res, next) {
  try {
    const user = await db.findByUsername(req.body.username);
    console.log(user);

    if (user.username) {
      return res
        .status(422)
        .json({ message: "This username is already taken" });
    }

    next();
  } catch (err) {
    next(err);
  }
}

async function checkUsernameExists(req, res, next) {
  try {
    const user = await db.findByUsername(req.body.username);

    if (!user) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  checkUsernameExists,
  checkUsernameFree,
};
