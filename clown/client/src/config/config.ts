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
        apiKey: "AIzaSyC-PpB7LK2xB6idgEThdpOOP-z43WHOh3c",
        authDomain: "first-fire-0.firebaseapp.com",
        projectId: "first-fire-0",
        storageBucket: "first-fire-0.appspot.com",
        messagingSenderId: "132402302003",
        appId: "1:132402302003:web:16fff791dcdc8c22102746",
    },
    server: {
        port: SERVER_PORT,
        url: URL,
    },
};

export default config;
