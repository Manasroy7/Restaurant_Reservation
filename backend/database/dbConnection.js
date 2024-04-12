import { mongoose } from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URL, {
        dbName: "restaurant",
    })
    .then(() => {
        console.log(`Connected to database successfully`);
    })
    .catch((err) => {
        console.log(`Some error occured while conneting to database! ${err}`);
    })
};

