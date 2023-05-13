import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const URI2 = 'mongodb://db-mongo:27017/mandadoapi';
const URI = process.env.MONGO_URI;

try {
    mongoose.connect(URI2, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(db => console.log("mongo database is connect"))
        .catch(error => console.error("mongo database connection failed:", error));
} catch (error) {
    console.error("error on connection", error);
}

export default mongoose;