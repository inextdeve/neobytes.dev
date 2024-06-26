import mongoose from "mongoose";
const connectDb = () => mongoose.connect(process.env.DB_CONNECTION_URL);
const database = mongoose.connection;
export { database };
export default connectDb;
