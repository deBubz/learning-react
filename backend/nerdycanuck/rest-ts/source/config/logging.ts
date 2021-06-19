/* 
    Smort Logging
*/

const getTimeStamp = (): string => new Date().toString();

const log = (type: string): Function => {
    return (namespace: string, msg: string, object: Object) => {
        if (object) {
            console.log(`[${getTimeStamp()}] [${type}] [${namespace}] ${msg}`, object);
        } else {
            console.log(`[${getTimeStamp()}] [${type}] [${namespace}] ${msg}`);
        }
    };
};

/**
 * Logs info
 */
const info = log('INFO');
/**
 * Logs errors
 */
const error = log('ERROR');
/**
 * Logs warnings
 */
const warn = log('WARN');
/**
 * Logs debug
 */
const debug = log('DEBUG');

export default { info, error, warn, debug };
