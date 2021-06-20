import dotenv from 'dotenv';

/*
    config file to export environment variables
*/

dotenv.config();

// server config ================================================================================
const SERVER_PORT = process.env.PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const SERVER = { hostname: SERVER_HOSTNAME, port: SERVER_PORT };

// mongo config ================================================================================
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false,
};

console.log(process.env.MONGO_CONNECT);

const MONGO_CONNECT = process.env.MONGO_CONNECT || 'broken';

const MONGO = {
    url: MONGO_CONNECT,
    options: MONGO_OPTIONS,
};

// config ====================================================================================
const config = { server: SERVER, mongo: MONGO };

export default config;
