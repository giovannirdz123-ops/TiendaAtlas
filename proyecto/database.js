"use strict";

var _mongoose = require("mongoose");
var _config = require("./config");
(async () => {
  try {
    const db = await (0, _mongoose.connect)(_config.MONGODB_URI);
    console.log("Database connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();