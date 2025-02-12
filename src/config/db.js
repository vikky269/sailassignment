import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        let dburl = process.env.CONNECTION_STRING
        await mongoose.connect(dburl)
        console.log("Database connected successfully")
    } catch (error) {
         console.log(error, "Error connecting to Database")
    }
}

export default connectToDb