"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logging_1 = __importDefault(require("./config/logging"));
var config_1 = __importDefault(require("./config/config"));
var sample_route_1 = __importDefault(require("./route/sample.route"));
var NAMESPACE = 'SERVER';
var app = express_1.default();
/*
    fun time
*/
/* logging all requests */
app.use(function (req, res, next) {
    logging_1.default.info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "]");
    // when response finish
    req.on('end', function () {
        logging_1.default.info(NAMESPACE, "METHOD - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "], STATUS - [" + res.statusCode + "]");
    });
    next();
});
/** parse requests */
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
/** api rules */
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // remove in prod
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    // optional, best practice
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT'); // remove in prod
        res.status(200).json({});
    }
    next();
});
/** routes */
app.use('/sample/', sample_route_1.default);
/** error handling */
app.use(function (req, res) {
    var error = Error('path not found');
    return res.status(404).json({ msg: error.message });
});
/** server */
app.listen(config_1.default.server.port, function () {
    logging_1.default.info(NAMESPACE, "Server running on http://" + config_1.default.server.hostname + ":" + config_1.default.server.port);
});
