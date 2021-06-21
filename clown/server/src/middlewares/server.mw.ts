import { Request, Response, NextFunction } from "express";
const logger = require("../config/logger");

/* 
    custom generic middleware for server
*/

const NAMESPACE = "SERVER-UTIL";

const logAllRequests = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NAMESPACE, `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on("end", () => {
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

/*
const redirectToIndex = (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../../web", "build", "index.html"));
};
*/

export default {
    logAllRequests,
    errHandling,
    // redirectToIndex,
};
