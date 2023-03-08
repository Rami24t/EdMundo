import mongoose from "mongoose";

export default async function () {
	try {
		mongoose.set("strictQuery", false);
		await mongoose.connect(process.env.DB_URI);
		console.log("connecting to db");
	} catch (error) {
		console.log("connection error: ", error.message);
		process.exit(1);
	}
}
