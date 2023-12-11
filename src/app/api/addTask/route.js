import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/taskModel";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
	try {
		const reqBody = await request.json();
		const { name, desc } = reqBody;
		// console.log(reqBody);

		const newTask = new Task({
			name,
			desc,
		});

		const savedTask = await newTask.save();
		// console.log(savedTask);

		const response = NextResponse.json({
			message: "Task save successfully",
			success: true,
			payload: {
				reqBody,
			},
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function GET(request) {
	try {
		const tasks = await Task.find();
		console.log(tasks, "tasks");

		const response = NextResponse.json({
			message: "Task get successfully",
			success: true,
			payload: {
				tasks,
			},
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function DELETE(request) {
	try {
		const id = request.nextUrl.searchParams.get("id");

		await Task.findByIdAndDelete(id);

		const response = NextResponse.json({
			message: "Task delete successfully",
			success: true,
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
