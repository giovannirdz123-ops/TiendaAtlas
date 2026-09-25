"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _app = _interopRequireDefault(require("./app"));
require("./database");
var _config = require("./config");
// Equivale al código que está en app.js

_app.default.listen(_config.PORT);
console.log("Servidor en puerto", _config.PORT);