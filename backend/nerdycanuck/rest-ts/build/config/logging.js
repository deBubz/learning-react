"use strict";
/*
    Smort Logging
*/
Object.defineProperty(exports, "__esModule", { value: true });
var getTimeStamp = function () { return new Date().toString(); };
var log = function (type) {
    return function (namespace, msg, object) {
        if (object) {
            console.log("[" + getTimeStamp() + "] [" + type + "] [" + namespace + "] " + msg, object);
        }
        else {
            console.log("[" + getTimeStamp() + "] [" + type + "] [" + namespace + "] " + msg);
        }
    };
};
/**
 * Logs info
 */
var info = log('INFO');
/**
 * Logs errors
 */
var error = log('ERROR');
/**
 * Logs warnings
 */
var warn = log('WARN');
/**
 * Logs debug
 */
var debug = log('DEBUG');
exports.default = { info: info, error: error, warn: warn, debug: debug };
