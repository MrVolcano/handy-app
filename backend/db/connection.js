const ENV = process.env.NODE_ENV || "development";
require('dotenv').config({ path: `${__dirname}/../.env.${ENV}` });
const { Pool } = require("pg");

// console.log("ENV is :", ENV);
const config = {
  
};

const db = new Pool(config);

const PORT = process.env.PORT || 3000;

if (!process.env.PGDATABASE && !process.env.DATABASE_URL) {
  throw new Error("No PGDATABASE or DATABASE_URL configured");
} else {
  console.log("connected to", process.env.PGDATABASE);
}

if (ENV === "production") {
  config.connectionString = process.env.DATABASE_URL;
  config.max = 2;
}


module.exports = db

