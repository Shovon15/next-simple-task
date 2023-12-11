"use client";

import { useState, useEffect } from "react";
import axios from "axios";
// import { useRouter } from "next/router";

const TaskCard = () => {
	const [data, setData] = useState([]);
	// const router = useRouter();

	const handleDelete = async (_id) => {
		console.log(_id);
		try {
			const response = await axios.delete(`/api/addTask?id=${_id}`);
			if (response.data.success) {
				// router.replace(router.asPath);
			}
			console.log(response.data?.message);
		} catch (error) {
			console.error("Task fetch failed", error.message);
		}
	};

	useEffect(() => {
		const getTask = async () => {
			try {
				const response = await axios.get("/api/addTask");
				console.log("Task get successfully", response.data.payload);
				if (response.data.payload) {
					setData(response.data.payload.tasks);
				}
			} catch (error) {
				console.error("Task fetch failed", error.message);
			}
		};

		getTask();
	}, []); // Empty dependency array to run the effect only once when the component mounts

	return (
		<>
			{data.length !== 0 &&
				data.map((task) => (
					<div key={task._id} className="border border-green-500 p-5 m-5 w-80 mx-auto">
						<p>
							Name: <span className="font-semibold text-green-500">{task.name}</span>
						</p>
						<p>
							Description: <span className="font-semibold text-green-500"> {task.desc}</span>
						</p>
						<div className="text-end">
							<button
								onClick={() => handleDelete(task._id)}
								className="bg-red-500 px-4 py-2 rounded-md font-seimbold text-white "
							>
								Delete
							</button>
						</div>
					</div>
				))}
		</>
	);
};

export default TaskCard;
