import { Request, Response, NextFunction } from "express";
import logger from "../config/logger";

/* 
    custom generic middleware for server
*/

const NAMESPACE = "SERVER-UTIL";

const logAllRequests = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NAMESPACE, `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on("finish", () => {
        logger.info(
            NAMESPACE,
            `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`
        );
    });
    next();
};

const errHandling = (req: Request, res: Response) => {
    const err = new Error("Path not found");
    return res.status(400).json({ message: err.message });
};

const cors = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*"); // remove in prod
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    // optional, best practice
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT"); // remove in prod
        res.status(200).json({});
    }

    next();
};

/*
const redirectToIndex = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../web", "build", "index.html"));
};
*/

export default {
    logAllRequests,
    errHandling,
    cors,
    // redirectToIndex,
};
