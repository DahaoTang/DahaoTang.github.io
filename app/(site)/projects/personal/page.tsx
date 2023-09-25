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

const projects = [
	{
		id: "202310", // "YYYYMM"
		period: "2023 OCT",
		name: "Prompt Engineering - AI Tutor in Education",
		keyWords: "AI; Prompt Engineering; Fine-tuning; OpenAI; GPT",
		topic: "AI",
	},
	{
		id: "202309",
		period: "2023 SEP",
		name: "Personal Web Upgrade (The one you are looking at!)",
		keyWords: "Web; Next.js; Vercel",
		topic: "Web",
	},
];

export default function PersonalProjects() {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	const totalPages = Math.ceil(projects.length / itemsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((page) => page + 1);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) setCurrentPage((page) => page - 1);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = projects.slice(startIndex, endIndex);

	return (
		<div className="flex flex-col h-full">
			<Header title="Personal Projects" />
			<div>
				<Heading1 content="Introduction" />
				<p>
					Starting from September 2023, I plan to initiate a series of personal
					projects, which I personally refer to as monthly projects.
				</p>
				<p>
					This means that every month, I will work on some small topics and try
					to productize and experience these small topics.
				</p>
				<p>
					In terms of the selection of project topics, I lean towards topics
					related to computer science, but am not limited to this, and fully
					take into account personal interests.
				</p>
			</div>
			<Heading1 content="List of Projects" />
			<div className="flex-grow overflow-auto">
				<Table>
					<TableCaption>The list of my monthly projects.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Period</TableHead>
							<TableHead>Project Name</TableHead>
							<TableHead>Key Words</TableHead>
							<TableHead className="text-right">Topic</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentItems.map((projects) => (
							<TableRow
								key={projects.id}
								onClick={() => {
									router.push(`/projects/personal/${projects.id}`);
								}}
							>
								<TableCell className="font-medium">{projects.period}</TableCell>
								<TableCell>{projects.name}</TableCell>
								<TableCell>{projects.keyWords}</TableCell>
								<TableCell className="text-right">{projects.topic}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="w-full flex flex-row justify-between mt-4 pb-7 pt-5">
				<button
					onClick={handlePreviousPage}
					disabled={currentPage === 1}
					className={`px-4 py-2 rounded ${
						currentPage === 1 ? "bg-neutral-300" : "bg-sky-700 text-neutral-100"
					}`}
				>
					Previous
				</button>
				<div className="text-neurtal-700">
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
