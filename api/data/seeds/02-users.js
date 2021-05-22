exports.seed = async function (knex) {
  await knex("users").insert([
    { username: "pollyPY", password: "testthisapp", role_id: 1 },
    { username: "jane123", password: "abcd1234", role_id: 2 },
  ]);
};
