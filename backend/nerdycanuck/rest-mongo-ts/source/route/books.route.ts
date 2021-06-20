import express from 'express';
import controller from '../controller/books.controller';

const router = express.Router();
/* 
    sample router 
*/

// path /api/books
router.get('/getall', controller.getAllBooks);
router.post('/create', controller.createBook);

export default router;
