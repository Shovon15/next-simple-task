import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-green-500 h-16 max-w-[1200px] mx-auto p-5 flex justify-between items-center">
			<Link href={"/"}>Logo</Link>
			<Link href={"/addTask"}>Add Task</Link>
		</nav>
	);
};

export default Navbar;
