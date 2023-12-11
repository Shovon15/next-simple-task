import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide a  task name"],
	},
	desc: {
		type: String,
		required: [true, "Please provide a description"],
	},
});

const Task = mongoose.models.task || mongoose.model("task", taskSchema);

export default Task;
