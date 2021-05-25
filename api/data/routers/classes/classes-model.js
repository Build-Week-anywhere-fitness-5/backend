const db = require("../../db-config");

async function getClasses() {
  return db("classes");
}

async function getClassById(class_id) {
  return db("classes").where("class_id", class_id).first();
}

async function getClassByName(class_name) {
  return db("classes").where("class_name", class_name).first();
}

async function add(newClass) {
  await db("classes").insert(newClass);
  return getClassByName(newClass.class_name);
}

async function updateById(class_id, thisClass) {
  await db("classes").where("class_id", class_id).update(thisClass);
  return getClassById(class_id);
}

const deleteById = async (class_id) => {
  const tobeDelete = await getClassById(class_id);
  await db("classes").where("class_id", class_id).del();
  return tobeDelete;
};

module.exports = {
  getClasses,
  getClassById,
  getClassByName,
  add,
  updateById,
  deleteById,
};
