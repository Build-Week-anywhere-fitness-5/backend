const db = require("../../db-config");

function find() {
  return db("users");
}

function findByUsername(username) {
  return db("users")
    .where("username", username)
    .first("user_id", "username", "password", "role");
}

async function add(user) {
  await db("users").insert(user);
  return db("users")
    .where("username", user.username)
    .first("user_id", "username", "role");
}

module.exports = {
  add,
  find,
  findByUsername,
};
