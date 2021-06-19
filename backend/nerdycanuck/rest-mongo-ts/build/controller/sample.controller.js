"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'SampleController';
/*
    sample controller with ts
*/
var sampleCheck = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "sample route called");
    return res.status(200).json({ msg: 'pong' });
};
exports.default = { sampleCheck: sampleCheck };
