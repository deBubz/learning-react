import dotenv from "dotenv";

dotenv.config();
/* 
    config exports
*/

/* server */
const SERVER_PORT = process.env.PORT || 1337;
const URL = `http://localhost:${SERVER_PORT}`;

const config = {
    firebase: {
        apiKey: process.env.FB_APIKEY,
        authDomain: process.env.FB_AUTHDOMAIN,
        projectId: process.env.FB_PROJECTID,
        storageBucket: process.env.FB_STORAGEBUCKET,
        messagingSenderId: process.env.FB_MESSAGINGSENDERID,
        appId: process.env.FB_APPID,
    },
    server: {
        port: SERVER_PORT,
        url: URL,
    },
};

export default config;
