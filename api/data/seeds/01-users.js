exports.seed = async function (knex) {
  await knex("users").insert([
    { username: "pollyPY", password: "testthisapp", role: "instructor" },
    { username: "jane123", password: "abcd1234", role: "client" },
  ]);
};
