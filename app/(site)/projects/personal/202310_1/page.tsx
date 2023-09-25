"use client";

import { Heading1 } from "@/app/(site)/components/Heading";
import Header from "@/app/(site)/components/header/Header";

export const personalProject202310_1 = {
	id: "202310_1", // "YYYYMM_No."
	period: "2023 OCT",
	name: "Prompt Engineering - AI Tutor in Education",
	keyWords: "AI; Prompt Engineering; Fine-tuning; OpenAI; GPT",
	topic: "AI",
};

export default function PersonalProject202310_1() {
	return (
		<div>
			<Header title="Personal Project" subtitle="Prompt Engineering" />
			<Heading1 content="Introduction" />
		</div>
	);
}
