"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sample_controller_1 = __importDefault(require("../controller/sample.controller"));
var router = express_1.default.Router();
/*
    sample router
*/
router.get('/ping', sample_controller_1.default.sampleCheck);
exports.default = router;
