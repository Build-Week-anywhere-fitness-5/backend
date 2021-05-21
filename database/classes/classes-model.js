const db = require("../config");

async function getClasses() {
  return db("classes");
}

module.exports = { getClasses };
