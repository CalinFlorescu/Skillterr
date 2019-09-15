const express = require("express");
const dotenv = require("dotenv");

module.exports = () => {
  const app = express();
  // load the environment variables
  dotenv.config();
  const PORT = process.env.PORT || 8001;
  app.use(express.json());
  app.listen(PORT, console.log(`Connection established on port ${PORT}`));

  return app;
};
