"use client";

import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export default function ioulia() {
	return (
		<div>
			<Header
				title="Startups"
				titleurl="/projects/startup"
				subtitle="ioulia"
				subsubtitle=""
			/>
			<Heading1 content="Introduction" />
			<div>A Tarot-based spiritual support chatbot</div>
		</div>
	);
}
