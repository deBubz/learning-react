import dotenv from 'dotenv';

/*
    config file to export environment variables
*/

dotenv.config();

// server config ================================================================================
const SERVER_PORT = process.env.PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';

const SERVER = { hostname: SERVER_HOSTNAME, port: SERVER_PORT };

// config ====================================================================================
const config = { server: SERVER };

export default config;
