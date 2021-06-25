import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import logger from "../config/logger";
import mongoose from "mongoose";
import { enableLogging } from "@firebase/database-types";

const NS = "UserCtrl";

const validate = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NS, "token validated, returning user");

    let firebase = res.locals.firebase;

    return User.findOne({ uid: firebase.uid })
        .then((user) => {
            if (user) {
                return res.status(200).json({ user });
            } else {
                return res.status(401).json({ msg: "user not found" });
            }
        })
        .catch((error) => {
            logger.error(NS, error.toString());
            return res.status(500).json({ error });
        });
};

const create = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NS, "attempting to register user...");

    let { uid, name } = req.body;
    let fire_token = res.locals.fire_token;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        uid,
        name,
    });

    return user
        .save()
        .then((u) => {
            logger.info(NS, `new user ${uid} created...`);
            return res.status(201).json({ user: u, fire_token });
        })
        .catch((error) => {
            logger.error(NS, error.toString());
            return res.status(500).json({ error });
        });
};

const login = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NS, "Logging in user...");

    let { uid } = req.body;
    let fire_token = res.locals.fire_token;

    return User.findOne({ uid })
        .then((u) => {
            if (u) {
                logger.info(NS, `User ${uid} found, signing in...`);
                return res.status(201).json({ user: u, fire_token });
            } else {
                logger.info(NS, `User ${uid} not found, register`);
                // return the middleware to create new user
                return create(req, res, next);
            }
        })
        .catch((error) => {
            logger.error(NS, error.toString());
            return res.status(500).json({ error });
        });
};

const read = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NS, "reding user ID");

    const _id = req.params.userID;
    return User.findById(_id).then((e) => {
        if (e) {
            return res.status(200).json({ e });
        } else {
            return res.status(404).json({ msg: "user not found" });
        }
    });
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    logger.info(NS, "reading all users");

    return User.find()
        .exec()
        .then((e) => {
            return res.status(200).json({ count: e.length, users: e });
        })
        .catch((error) => {
            logger.error(NS, error);
            return res.status(500).json({ error });
        });
};

export default {
    validate,
    create,
    login,
    read,
    readAll,
};
