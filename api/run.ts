import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res) => {
	return res.json({
		message: "Hello World",
	});
});

app.listen(port, () => {
	console.log(`Server started at ${port}`);
});
