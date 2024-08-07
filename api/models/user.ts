import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	firstName: {
		required: true,
		type: String,
	},
	lastName: {
		required: false,
		type: String,
	},
	email: {
		required: true,
		type: String,
		unique: true,
	},
	password: {
		required: true,
		type: String,
	},
	isSeller: {
		required: true,
		type: Boolean,
	},
});

export default mongoose.model("User", userSchema);
