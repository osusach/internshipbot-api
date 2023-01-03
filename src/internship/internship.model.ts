import mongoose from "mongoose";

export const InternshipSchema = new mongoose.Schema({
    author: {type: String, required: true},
    offer: {type: String, required: true},
    origin: {type: String, required: true}, 
    createdAt: {type: Date, required: true} 
})

interface Internship {
    id: string,
    author: string,
    offer: string,
    origin: string,
    createdAt: Date
}

export default Internship