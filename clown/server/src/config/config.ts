import dotenv from "dotenv";

dotenv.config();
/* 
    config exports
*/

/* server */
const SERVER_PORT = process.env.PORT || 1337;
const URL = `http://localhost:${SERVER_PORT}`;

const config = {
    mongo: {
        url: process.env.MONGO_URL || "borked",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    server: {
        port: SERVER_PORT,
        url: URL,
    },
};

export default config;
