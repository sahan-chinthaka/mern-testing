import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true,
	},
	title: {
		required: true,
		type: String,
	},
	description: {
		required: true,
		type: String,
	},
	price: {
		required: true,
		type: Number,
	},
	count: {
		required: true,
		type: Number,
	},
});

export default mongoose.model("Product", productSchema);
