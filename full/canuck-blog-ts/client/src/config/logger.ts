const DEFAULT_NAMESPACE = "client";

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
const log = (type: String) => {
    return (message: string, namespace?: string) => {
        if (typeof message === "string") {
            console.log(`[${getTimeStamp()}] [${namespace || DEFAULT_NAMESPACE}] [${namespace}] ${message}`);
        } else {
            console.log(`[${getTimeStamp()}] [${namespace || DEFAULT_NAMESPACE}] [${namespace}]`, message);
        }
    };
};

const info = log("INFO");
const error = log("ERROR");
const warn = log("WARN");

export default { info, error, warn };
