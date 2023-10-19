// require("dotenv").config();
const { Pool } = require("pg");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const pool = new Pool({
  user: "postgres",
  password: "peanuts",
  host: "jetstream-db-1", // <-- Use the environment variable here
  port: "5432",
  database: "pilots",
});

module.exports = pool;
