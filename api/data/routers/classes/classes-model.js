const db = require("../../db-config");

async function getClasses() {
  const getDate = await db("classes");

  // .select(
  //   "class_name",
  //   "type",
  //   "date",
  //   "start_time",
  //   "duration_mins",
  //   "intensity",
  //   "location",
  //   "current_registered",
  //   "max_class_size"
  // );

  // const date =

  return getDate.map((e) => {
    return {
      class_name: e.class_name,
      type: e.type,
      date: String(e.date).split(
        " 00:00:00 GMT-0400 (Eastern Daylight Time)"
      )[0],
      start_time: e.start_time,
      duration_mins: e.duration_mins,
      intensity: e.intensity,
      location: e.location,
      current_registered: e.current_registered,
      max_class_size: e.max_class_size,
    };
  });
  //
  //return date;
  //console.log(getDate);
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
