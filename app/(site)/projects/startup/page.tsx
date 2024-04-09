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

export default function Startups() {
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
			<Header title="Startups" />
			<div>
				<Heading1 content="Introduction" />
				<p>
					This section documents the startups I have worked with or have been
					wokring on.
				</p>
				<p>
					Click on the name of the startup to enter its official website if any.
					Click on other place in the row to enter the detail page.
				</p>
			</div>
			<Heading1 content="Table of Projects" />
			<div className="flex-grow overflow-auto">
				<Table>
					<TableCaption>The list of my startup projects.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[200px]">Period</TableHead>
							<TableHead>Name</TableHead>
							<TableHead className="text-right">Description</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentItems.map((projects) => (
							<TableRow
								className="hover:bg-neutral-200"
								key={projects.id}
								onClick={() => {
									router.push(`/projects/startup/${projects.id}`);
								}}
							>
								<TableCell className="font-medium">{projects.period}</TableCell>
								<TableCell>
									<a
										href={projects.url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-red-300"
									>
										{projects.name}
									</a>
								</TableCell>
								<TableCell className="text-right">
									{projects.description}
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
