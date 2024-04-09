"use client";

import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export default function GigHero() {
	return (
		<div>
			<Header
				title="Startups"
				titleurl="/projects/startup"
				subtitle="GigHero"
				subsubtitle=""
			/>
			<Heading1 content="Introduction" />
			<div>A marketplace for on-site services</div>
		</div>
	);
}
