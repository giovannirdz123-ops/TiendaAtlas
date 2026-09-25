"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _indexRoutes = _interopRequireDefault(require("./routes/indexRoutes"));
var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
var _react = require("react");
const app = (0, _express.default)();
app.set("views", _path.default.join(__dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars.default)({
  layoutsDir: _path.default.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs");
app.use((0, _morgan.default)('dev'));
app.use(_express.default.urlencoded({
  extended: false
}));
app.use(_indexRoutes.default);
app.use(_express.default.static(_path.default.join(__dirname, "frontend")));
var _default = exports.default = app; //expoerto el objeto app