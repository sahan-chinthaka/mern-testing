import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: "User",
		required: true,
	},
	product: {
		type: mongoose.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	orderedDate: {
		type: Date,
		default: Date.now,
		required: true,
	},
	status: {
		type: String,
		enum: ["ORDERED", "DELIVERED", "CANCELLED"],
		default: "ORDERED",
	},
	count: {
		type: Number,
		required: true,
	},
});

export default mongoose.model("Order", orderSchema);
