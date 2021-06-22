import express from "express";
import config from "./config/config";
import logger from "./config/logger";
import middlewares from "./middlewares/server.mw";

const app = express();
const NAMESPACE = "servers";
/* 
    main server stuff
*/

/* mongodb connect */

/* basic middlewares */
app.use(middlewares.logAllRequests);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* yep routes */

/* no more routes */

app.use(middlewares.errHandling);

app.listen(config.server.port, () => {
    logger.info(NAMESPACE, `server running on ${config.server.url}`);
});
