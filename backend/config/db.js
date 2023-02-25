import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected to ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
