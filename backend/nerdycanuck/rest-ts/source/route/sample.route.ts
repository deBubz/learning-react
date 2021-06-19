import express from 'express';
import controller from '../controller/sample.controller';

const router = express.Router();
/* 
    sample router 
*/

router.get('/ping', controller.sampleCheck);

export default router;
