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
      directory: '../node-server-testing-challenge/migrations'
  },
    seeds: {
			directory: "./seeds",
		},
  }

