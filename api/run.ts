import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user-router";
import productRouter from "./routes/product-router";
import orderRouter from "./routes/order-router";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = 5000;

const mongoString = process.env.DB_CONNECTION;

if (!mongoString) {
	console.log("MongoDB connection string is not present");
	process.exit();
}

mongoose.connect(mongoString);
const database = mongoose.connection;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

database.once("connected", () => {
	console.log("Database Connected");
});

app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
	console.log(`Server started at ${port}`);
});
