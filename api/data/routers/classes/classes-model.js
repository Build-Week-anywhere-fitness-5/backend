const db = require("../../db-config");

async function getClasses() {
  return db("classes");
}

module.exports = { getClasses };
