import express from 'express';
import log from './config/logging';
import config from './config/config';
import mongoose from 'mongoose';

import sampleRoute from './route/books.route';
import logging from './config/logging';

const NAMESPACE = 'SERVER';
const app = express();

/*
    fun time
*/

/** mongoDB connection */
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((res) => {
        logging.info(NAMESPACE, 'connected to mongodb');
    })
    .catch((error) => log.error(NAMESPACE, 'mongodb connection error'));

/* logging all requests */
app.use((req, res, next) => {
    log.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    // when response finish
    req.on('end', () => {
        log.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

/** parse requests */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** api rules */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // remove in prod
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    // optional, best practice
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT'); // remove in prod
        res.status(200).json({});
    }

    next();
});

/** routes */
app.use('/api/books', sampleRoute);

/** error handling */
app.use((req, res) => {
    const error = Error('path not found');

    return res.status(404).json({ msg: error.message });
});

/** server */
app.listen(config.server.port, () => {
    log.info(NAMESPACE, `Server running on http://${config.server.hostname}:${config.server.port}`);
});
