"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_ws_1 = __importDefault(require("express-ws"));
dotenv_1["default"].config();
var baseApp = (0, express_1["default"])();
var app = (0, express_ws_1["default"])(baseApp).app;
app.use(body_parser_1["default"].json());
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
    console.log(req.body);
    res.send("Hello World!");
});
app.ws('/', function (ws, req) {
    console.log("Camera websocket connected");
    ws.on('message', function (msg) {
        console.log(msg);
    });
});
app.listen(port, function () {
    console.log("Camera Alarm Server listening at http://localhost:".concat(port));
});
