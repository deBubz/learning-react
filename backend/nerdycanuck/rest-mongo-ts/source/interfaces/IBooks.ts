import { Document } from 'mongoose';

export default interface IBook extends Document {
    title: String;
    author: String;
    extraInformation: String; // can modify object after getting passed in
}
