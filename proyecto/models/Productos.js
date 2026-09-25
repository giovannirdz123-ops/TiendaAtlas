"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = require("mongoose");
const productoEsquema = new _mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
  precio: {
    type: String,
    required: true
  },
  opcion: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = exports.default = (0, _mongoose.model)("Prodructos", productoEsquema);