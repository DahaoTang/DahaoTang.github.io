"use client";

import Image from "next/image";
import Header from "@/app/(site)/components/header/Header";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/app/components/Table";

import { moments } from "./Moments";

export default function Moments() {
	return (
		<div className="flex flex-col h-full">
			<Header title="Moments" />
			<div className="h-[5%]"></div>
			<div className="flex-grow overflow-auto">
				<Table>
					<TableCaption>The list of my moments.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">Date</TableHead>
							<TableHead>Content</TableHead>
							<TableHead className="text-right">Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{moments.map((moments) => (
							<TableRow className="hover:bg-neutral-100" key={moments.id}>
								<TableCell className="font-medium">{moments.date}</TableCell>
								<TableCell className="flex flex-row ">
									<div className="grid grid-cols-3">
										{moments.image1 && (
											<Image
												src={moments.image1}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image2 && (
											<Image
												src={moments.image2}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image3 && (
											<Image
												src={moments.image3}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image4 && (
											<Image
												src={moments.image4}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image5 && (
											<Image
												src={moments.image5}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image6 && (
											<Image
												src={moments.image6}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image7 && (
											<Image
												src={moments.image7}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image8 && (
											<Image
												src={moments.image8}
												alt=""
												width={150}
												height={100}
											/>
										)}
										{moments.image9 && (
											<Image
												src={moments.image9}
												alt=""
												width={150}
												height={100}
											/>
										)}
									</div>
									<div className="p-3">
										<p>{moments.text1}</p>
										<p>{moments.text2}</p>
										<p>{moments.text3}</p>
										<p>{moments.text4}</p>
										<p>{moments.text5}</p>
										<p>{moments.text6}</p>
									</div>
								</TableCell>
								<TableCell className="text-right pr-9">
									{moments.status}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="h-[10%]"></div>
		</div>
	);
}
