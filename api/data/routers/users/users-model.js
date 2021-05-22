const db = require("../../db-config");

async function add(user) {
  const [user_id] = await db("users").insert(user);
  return findById(user_id);
}

function find() {
  return db("users");
}

function findById(user_id) {
  return db("users as u")
    .innerJoin("roles as r", "r.role_id", "u.role_id")
    .where("u.user_id", user_id)
    .first("u.user_id", "u.username", "r.name");
}

function findByUsername(username) {
  return db("users as u")
    .innerJoin("roles as r", "r.id", "u.role_id")
    .where("u.username", username)
    .first("u.id", "u.username", "r.name");
}

module.exports = {
  add,
  find,
  findById,
  findByUsername,
};
