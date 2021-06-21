/* 
    custom logging messages for debugging
*/
const getTimeStamp = () => {
    return new Date().toISOString();
};

/**
 * Log out message with timestamp and namespace
 * Object is optional
 */
const log = (type) => {
    return (namespace, msg, object) => {
        if (object) {
            console.log(`[${getTimeStamp()}] [${type}] [${namespace}] ${msg}`, object);
        } else {
            console.log(`[${getTimeStamp()}] [${type}] [${namespace}] ${msg}`);
        }
    };
};

const info = log("INFO");
const error = log("ERROR");
const warn = log("WARN");
const debug = log("DEBUG");

module.exports = { info, error, warn, debug };
