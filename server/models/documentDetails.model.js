import mongoose from 'mongoose';
import { Schema } from 'mongoose'
const documentDetailsSchema = new Schema(
    {
        customerDocument1:{
            type: String, // cloudinary url
            required: true,
        },
        customerDocument2: {
            type: String, // cloudinary url
            required: true,
        }
    },
    {
        timestamps: true
    }
);

export const DocumentDetails = mongoose.model('DocumentDetails', documentDetailsSchema);
