exports.up = async function (knex) {
  await knex.schema.createTable("roles", (table) => {
    table.increments("role_id");
    table.text("name").notNull().unique();
  });

  await knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.text("username", 200).notNull().unique();
    table.text("password", 200).notNull();
    table
      .integer("role_id")
      .notNull()
      .defaultTo(1)
      .references("role_id")
      .inTable("roles")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("classes", (table) => {
    table.increments("class_id");
    table.text("class_name").notNull().unique();
    table.text("type").notNull();
    table.date("date").notNull();
    table.text("start_time").notNull();
    table.tinyint("duration_mins").notNull();
    table.text("intensity").notNull();
    table.text("location").notNull();
    table.tinyint("current_registered").notNull();
    table.tinyint("max_class_size").notNull();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("roles");
  await knex.schema.dropTableIfExists("classes");
};
