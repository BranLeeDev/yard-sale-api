require("dotenv").config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  isPro: process.env.NODE_ENV === "production",
  dbUrl: process.env.DATABASE_URL,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
};

module.exports = { config };
