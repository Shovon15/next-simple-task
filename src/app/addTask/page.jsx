"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddTaskPage = () => {
	const router = useRouter();
	const [data, setData] = React.useState({
		name: "",
		desc: "",
	});
	const [buttonDisabled, setButtonDisabled] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const response = await axios.post("/api/addTask", data);
			console.log("task save success", response.data);
			// toast.success("Login success");
			router.push("/");
		} catch (error) {
			console.log("task save failed", error.message);
			// toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<p className="text-center p-5 text-4xl font-bold text-green-500">add task</p>
			<form className="m-5 flex flex-col w-96 mx-auto">
				<label className="font-bold py-2 text-xl text-green-500">input task name.</label>

				<input
					value={data.name}
					onChange={(e) => setData({ ...data, name: e.target.value })}
					className="outline-none border border-green-500 rounded-md p-2"
				/>

				<label className="font-bold py-2 text-xl text-green-500">input task description.</label>
				<input
					value={data.desc}
					onChange={(e) => setData({ ...data, desc: e.target.value })}
					className="outline-none border border-green-500 rounded-md p-2"
				/>
				<button
					type="submit"
					className="px-5 py-3 bg-green-500 mt-5 text-white font-bold hover:bg-green-400 active:bg-green-700"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddTaskPage;
