import mongoose from "mongoose";

export default async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log(`connect to database successfully`);
    } catch (error) {
        console.log('not connect to database');
    }
}