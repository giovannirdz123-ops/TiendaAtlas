"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.MONGODB_URI = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
const MONGODB_URI = exports.MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/tiendaweb-mongo";
const PORT = exports.PORT = process.env.PORT || 5000;