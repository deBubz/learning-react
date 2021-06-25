import logger from "../config/logger";
import firebaseAdmin from "firebase-admin";
import { Request, Response, NextFunction } from "express";

const NS = "FB Middleware";
/* 
    taking firebase token - check with firebase admin for valid user
*/

const extractFirebaseInfo = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NS, "Validating fb token...");

    let token = req.headers.authorization?.split(" ")[1];

    if (token) {
        firebaseAdmin
            .auth()
            .verifyIdToken(token)
            .then((result) => {
                if (result) {
                    // add info to response
                    res.locals.firebase = result;
                    res.locals.fire_token = token;
                    next();
                } else {
                    logger.warn(NS, "bad token...");
                    return res.status(401).json({ msg: "unauthorized" });
                }
            })
            .catch((error) => {
                logger.error(NS, error);
                return res.status(401).json({ msg: "unauthorized" });
            });
    } else {
        return res.status(401).json({ msg: "unauthorized" });
    }
};

export default extractFirebaseInfo;
