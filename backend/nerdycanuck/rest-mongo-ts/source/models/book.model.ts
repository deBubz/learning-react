import mongoose, { Schema } from 'mongoose';
import IBook from '../interfaces/IBooks';

/* 
    Book Schema for mongoose
*/

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        extraInformation: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

/** mongoose hooks */

// edit data after saved
BookSchema.post<IBook>('save', function () {
    this.extraInformation = 'extra string';
});

export default mongoose.model<IBook>('Books', BookSchema);
