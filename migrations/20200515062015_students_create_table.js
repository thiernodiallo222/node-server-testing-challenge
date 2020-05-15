
exports.up = async function(knex) {
  	await knex.schema.createTable("students", (table) => {
        table.increments();
        table.string("Name").notNull();
        table.string("Major");
	})
};

exports.down = async function(knex) {
  	await knex.schema.dropTableIfExists("students")
};




