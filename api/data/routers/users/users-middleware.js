const db = require("./users-model");

async function checkUsernameFree(req, res, next) {
  try {
    const { username } = req.body;
    const user = await db.findByUsername({ username }).first();

    if (user) {
      return res.status(422).json({
        message: "This username is already taken",
      });
    }
    next();
  } catch (err) {
    next(err);
  }
}

async function checkUsernameExists(req, res, next) {
  try {
    const { username } = req.body;
    const user = await db.findByUsername({ username }).first();

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
