// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/sqlite3'
    }
  },
    migrations: {
      tableName: 'knex_migrations'
  },
    seeds: {
			directory: "./seeds",
		},
  }

