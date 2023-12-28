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

export default function Home() {
	const router = useRouter();
	return (
		<div>
			<Header title="Dahao Tang Profile" />
			<div className="max-w-[60%]">
				<Heading1 content="Introduction" />
				{/* <div className="text-lg text-yellow-500">
					Welcome to my personal website!
				</div> */}
				<div>
					My name is Dahao Tang. I am currently a third-year student studying at
					the University of Sydney, taking the Bachelor of Advanced Computing
					(majoring in Computer Science) and the Bachelor of Commerce (majoring
					in Finance).
				</div>
				{/* <div className="pt-3 text-neutral-600">
					<Heading1 content="My Favourites: " />
					<div>Favourite sport: badminton</div>
					<div>Favourite musical instrument: classic guitar</div>
					<div
						className="hover:text-red-300"
						onClick={() => {
							router.push(`https://en.wikipedia.org/wiki/Klara_and_the_Sun`);
						}}
					>
						Favourite novel: Klara and the Sun
					</div>
					<div
						className="hover:text-sky-300"
						onClick={() => {
							router.push(`https://en.wikipedia.org/wiki/Alita:_Battle_Angel`);
						}}
					>
						Favourite movie: Alita: Battle Angel
					</div>
				</div> */}
			</div>
			<div className="pt-6">
				<Heading1 content="Education" />
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Period</TableHead>
							<TableHead>Level</TableHead>
							<TableHead>Institution</TableHead>
							<TableHead>Area</TableHead>
							<TableHead>Grade</TableHead>
							<TableHead className="text-right">P.S.</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow className="hover:bg-neutral-200">
							<TableCell className="font-medium">2021-2025</TableCell>
							<TableCell>Undergraduate</TableCell>
							<TableCell
								className="hover:text-red-300"
								onClick={() => {
									router.push(`https://www.sydney.edu.au/`);
								}}
							>
								Univeristy of Sydney
							</TableCell>
							<TableCell>Computer Science & Finance</TableCell>
							<TableCell>WAM: Distinction</TableCell>
							<TableCell className="text-right">N/A</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<div>
				<Heading1 content="Certificate" />
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Period</TableHead>
							<TableHead>Title</TableHead>
							<TableHead>Institution</TableHead>
							<TableHead>Content</TableHead>
							<TableHead className="text-right">P.S.</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow className="hover:bg-neutral-200">
							<TableCell className="font-medium">2023-Now</TableCell>
							<TableCell>Australian Mensa Member</TableCell>
							<TableCell
								className="hover:text-red-300"
								onClick={() => {
									router.push(`https://www.mensa.org/national-group/australia`);
								}}
							>
								Australian Mensa
							</TableCell>
							<TableCell>IQ: 141; Percentile: 99.7</TableCell>
							<TableCell className="text-right">
								My mom says: &quot;Paying to test IQ indicates your IQ
								wouldn&apos;t be high.&quot;
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
