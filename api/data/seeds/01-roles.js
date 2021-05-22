exports.seed = async function (knex) {
  await knex("roles").insert([{ name: "client" }, { name: "instructor" }]);
};
