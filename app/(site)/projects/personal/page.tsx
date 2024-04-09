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

import { projects } from "./Projects";

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
				<p>This section documents my personal projects.</p>
			</div>
			<Heading1 content="Table of Projects" />
			<div className="flex-grow overflow-auto">
				<Table>
					<TableCaption>The list of my personal projects.</TableCaption>
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
							<TableRow className="hover:bg-neutral-200" key={projects.id}>
								<TableCell className="font-medium">
									<a
										href={projects.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{projects.period}
									</a>
								</TableCell>
								<TableCell>
									<a
										href={projects.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{projects.name}
									</a>
								</TableCell>
								<TableCell>
									<a
										href={projects.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{projects.keywords}
									</a>
								</TableCell>
								<TableCell className="text-right">
									<a
										href={projects.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{projects.topic}
									</a>
								</TableCell>
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
