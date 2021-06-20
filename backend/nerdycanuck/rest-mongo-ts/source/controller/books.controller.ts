import { Request, Response, NextFunction } from 'express';
import log from '../config/logging';
import Book from '../models/book.model';
import mongoose from 'mongoose';

const NAMESPACE = 'SampleController';
/* 
    sample controller with ts
*/

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author,
        title,
    });

    return book
        .save()
        .then((result) => res.status(200).json({ newBook: result }))
        .catch((error) => res.status(400).json({ msg: error.message, error }));
};

const getAllBooks = (req: Request, res: Response) => {
    Book.find()
        .exec()
        .then((result) => {
            return res.status(200).json({ books: result, count: result.length });
        })
        .catch((error) => {
            return res.status(400).json({ msg: error.message, error });
        });
};

export default { getAllBooks, createBook };
