import { Document } from "mongoose";

export default interface IUser extends Document {
    uid: string;
    name: string;

    // other default needed from mongo is provided by Doc
}
