"use client";

import { Heading1 } from "@/app/(site)/components/Heading";
import Header from "@/app/(site)/components/header/Header";

export const researchProject202312_1 = {
	id: "202312_1",
	period: "2023 DEC",
	name: "USYD Summer Vacation Researcg Program",
	keyWords: "",
	topic: "T.B.D.",
};

export default function ResearchProject202312_1() {
	return (
		<div>
			<Header
				title="Personal Project"
				subtitle="USYD Summer Vacation Research Program"
			/>
			<Heading1 content="Introduction" />
		</div>
	);
}
