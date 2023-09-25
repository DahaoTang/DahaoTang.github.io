"use client";

import { Heading1 } from "@/app/(site)/components/Heading";
import Header from "@/app/(site)/components/header/Header";

export const personalProject202309_1 = {
	id: "202309_1",
	period: "2023 SEP",
	name: "Personal Web Upgrade (The one you are looking at!)",
	keyWords: "Web; Next.js; Vercel",
	topic: "Web",
};

export default function PersonalProject202309_1() {
	return (
		<div>
			<Header title="Personal Project" subtitle="Personal Webside Upgrade" />
			<Heading1 content="Introduction" />
		</div>
	);
}
