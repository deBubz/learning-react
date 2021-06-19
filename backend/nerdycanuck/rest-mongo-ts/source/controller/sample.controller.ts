import { Request, Response, NextFunction } from 'express';
import log from '../config/logging';

const NAMESPACE = 'SampleController';
/* 
    sample controller with ts
*/

const sampleCheck = (req: Request, res: Response, next: NextFunction) => {
    log.info(NAMESPACE, `sample route called`);

    return res.status(200).json({ msg: 'pong' });
};

export default { sampleCheck };
