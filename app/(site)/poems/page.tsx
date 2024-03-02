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

import { poems } from "./Poems";

export default function Poems() {
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	const totalPages = Math.ceil(poems.length / itemsPerPage);

	const handleNextPage = () => {
		if (currentPage < totalPages) setCurrentPage((page) => page + 1);
	};

	const handlePreviousPage = () => {
		if (currentPage > 1) setCurrentPage((page) => page - 1);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentItems = poems.slice(startIndex, endIndex);

	return (
		<div className="flex flex-col h-full">
			<Header title="Poems" />
			<Heading1 content="Introduction" />
			<div className="w-full flex flex-col">
				<div>In this section, I will share some of my own pieces with you.</div>
			</div>
			<Heading1 content="Table of Poems" />
			<div className="flex-grow overflow-auto">
				<Table>
					<TableCaption>The list of my poems.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Date</TableHead>
							<TableHead>Title</TableHead>
							<TableHead className="text-right">Place</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentItems.map((poems) => (
							<TableRow
								className="hover:bg-neutral-200"
								key={poems.id}
								onClick={() => {
									router.push(`/poems/${poems.id}`);
								}}
							>
								<TableCell className="font-medium">{poems.date}</TableCell>
								<TableCell>{poems.title}</TableCell>
								<TableCell className="text-right">{poems.place}</TableCell>
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
