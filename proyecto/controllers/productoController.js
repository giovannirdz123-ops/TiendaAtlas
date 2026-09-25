"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductos = exports.statusProductos = exports.renderProductos = exports.renderEditProducto = exports.deleteProductos = exports.createProductos = void 0;
var _Productos = _interopRequireDefault(require("../models/Productos"));
const renderProductos = async (req, res) => {
  const productos = await _Productos.default.find().lean();
  res.render("index", {
    productos: productos
  });
};
exports.renderProductos = renderProductos;
const createProductos = async (req, res) => {
  try {
    const productos = (0, _Productos.default)(req.body);
    await productos.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
exports.createProductos = createProductos;
const renderEditProducto = async (req, res) => {
  try {
    const productos = await _Productos.default.findById(req.params.id).lean();
    res.render("editar", {
      productos
    });
  } catch (error) {
    console.log(error.message);
  }
};
exports.renderEditProducto = renderEditProducto;
const updateProductos = async (req, res) => {
  const {
    id
  } = req.params;
  await _Productos.default.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};
exports.updateProductos = updateProductos;
const deleteProductos = async (req, res) => {
  const {
    id
  } = req.params;
  await _Productos.default.findByIdAndDelete(id);
  res.redirect("/");
};
exports.deleteProductos = deleteProductos;
const statusProductos = async (req, res) => {
  const {
    id
  } = req.params;
  const productos = await _Productos.default.findById(id);

  // Mandar a traer mi propiedad opcion que esta en el Modelo
  productos.opcion = !productos.opcion;
  await productos.save();
  res.redirect("/");
};
exports.statusProductos = statusProductos;