import firebase from "firebase";
import IUser from "../interfaces/IUser";
import { auth } from "../config/firebase";
import axio from "axios";
import axios from "axios";
import logger from "../config/logger";

/* 
    firebase auth module
*/

/**
 *  Sign in with social media,
 */
export const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) =>
    new Promise<firebase.auth.UserCredential>((resolve, reject) => {
        auth.signInWithPopup(provider)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });

export const Authenticate = async (
    uid: string,
    name: string,
    fire_token: string,
    callback: (err: string | null, user: IUser) => void
) => {
    // call the api and log in
    const data = { uid, name };
    try {
        const response = await axios({
            method: "POST",
            url: `http:/localhost:1337/users/login`,
            data,
            headers: { Authorization: `Bearer ${fire_token}` },
        });

        if (response.status === 200 || response.status === 201 || response.status === 304) {
            logger.info("authenticated");
            callback(null, response.data.user);
        } else {
            logger.warn("unable to authenticate");
            callback("unable to authenticate", response.data.user);
        }
    } catch (error: any) {
        logger.error(error.toString());
        // callback("unable to authenticate", response.data.user);
    }
};

export const Validate = async (fire_token: string, callback: (err: string | null, user: IUser | null) => void) => {
    // call the api and log in
    try {
        const response = await axios({
            method: "GET",
            url: `$config{config.server.url}/users/validate`,
            headers: { Authorization: `Bearer ${fire_token}` },
        });

        if (response.status === 200 || response.status === 304) {
            logger.info("validated");
            callback(null, response.data.user);
        } else {
            logger.warn("unable to validate");
            callback("unable to validate", null);
        }
    } catch (error: any) {
        logger.error(error.toString());
        callback("unable to validate", null);
    }
};
