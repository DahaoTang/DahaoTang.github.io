"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/app/components/Table";

const posts = [
	{
		id: "20230925test", // "YYYYMMDDFirstWordOfTitleInNoncapitalLetters"
		date: "2023.9.25",
		title: "Post Placeholer",
		keyWords: "Web; Next.js",
		topic: "Web",
	},
];

export default function Posts() {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	const totalPages = Math.ceil(posts.length / itemsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((page) => page + 1);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) setCurrentPage((page) => page - 1);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = posts.slice(startIndex, endIndex);

	return (
		<div className="flex flex-col h-full">
			<Header title="Posts" />
			<Heading1 content="Table of Posts" />
			<div className="flex-grow overflow-auto">
				<Table>
					<TableCaption>The list of my posts.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Period</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Key Words</TableHead>
							<TableHead className="text-right">Topic</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentItems.map((posts) => (
							<TableRow
								key={posts.id}
								onClick={() => {
									router.push(`/posts/${posts.id}`);
								}}
							>
								<TableCell className="font-medium">{posts.date}</TableCell>
								<TableCell>{posts.title}</TableCell>
								<TableCell>{posts.keyWords}</TableCell>
								<TableCell className="text-right">{posts.topic}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="w-full flex flex-row self-end justify-between mt-4 pb-7 pt-5">
				<button
					onClick={handlePreviousPage}
					disabled={currentPage === 1}
					className={`px-4 py-2 rounded ${
						currentPage === 1 ? "bg-neutral-300" : "bg-sky-700 text-neutral-100"
					}`}
				>
					Previous
				</button>
				<div className="text-neutral-700">
					Page {currentPage} of {totalPages}
				</div>
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className={`px-4 py-2 rounded ${
						currentPage === totalPages
							? "bg-neutral-300"
							: "bg-sky-700 text-white"
					}`}
				>
					Next
				</button>
			</div>
		</div>
	);
}
