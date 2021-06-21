import dotenv from "dotenv";

/* 
    config file
*/

dotenv.config();

const config = {
    firebase: {
        apiKey: process.env.FIREBASE_KEY,
        authDomain: process.env.FIREBASE_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT,
        storageBucket: process.env.FIREGBASE_STOREBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDER,
        appId: process.env.FIREBASE_APPID,
    },
    server: {
        port: 1337,
        url: "http://localhost:1337",
    },
};

export default config;
