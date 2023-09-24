"use client";

import { useRouter } from "next/navigation";

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

export default function PersonalProjects() {
	const router = useRouter();

	return (
		<div>
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
			<div>
				<Heading1 content="List of Projects" />
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
						<TableRow
							className="hover:bg-neutral-300"
							onClick={() => {
								// router.push(`/`);
								console.log("2023 OCT");
							}}
						>
							<TableCell className="font-medium">2023 OCT</TableCell>
							<TableCell>Prompt Engineering - AI Tutor in Education</TableCell>
							<TableCell>
								AI; Prompt Engineering; Fine-tuning; OpenAI; GPT
							</TableCell>
							<TableCell className="text-right">AI</TableCell>
						</TableRow>
						<TableRow
							className="hover:bg-neutral-300"
							onClick={() => {
								// router.push(`/`);
								console.log("2023 SEP");
							}}
						>
							<TableCell className="font-medium">2023 SEP</TableCell>
							<TableCell>
								Personal Website Upgrade (The one you are looking at!)
							</TableCell>
							<TableCell>Personal website; Next.js</TableCell>
							<TableCell className="text-right">Web Development</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
