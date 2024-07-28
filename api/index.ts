import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRouter from "./routes/user-router";
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

app.use(
	cors({
		origin: ["https://mern-testing-livid.vercel.app"],
		methods: ["POST", "GET"],
		credentials: true,
	})
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

database.once("connected", () => {
	console.log("Database Connected");
});

app.get("/", (req, res) => res.json({ message: "Hello World from express" }));

app.use("/user", userRouter);

app.listen(port, () => {
	console.log(`Server started at ${port}`);
});
