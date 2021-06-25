import express from "express";
import mongoose from "mongoose";
import firebaseAdmin from "firebase-admin";

import config from "./config/config";
import logger from "./config/logger";
import middlewares from "./middlewares/server.mw";

import userRoutes from "./routes/users.routes";
import router from "./routes/users.routes";

const app = express();
const NAMESPACE = "servers";

/* 
    main server stuff
*/

/* firebase admin connect */
const serviceAccountKey = require("./config/serviceAccount.json");
firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccountKey),
});

/* mongodb connect */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logger.info(NAMESPACE, "mongo connected");
    })
    .catch((error) => logger.error(NAMESPACE, error));

/* basic middlewares */
app.use(middlewares.logAllRequests);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(middlewares.cors);

/* yep routes */
router.use("/users", userRoutes);

/* no more routes */

app.use(middlewares.errHandling);

app.listen(config.server.port, () => {
    logger.info(NAMESPACE, `server running on ${config.server.url}`);
});
