"use client";

import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export const post20230925_1 = {
	id: "20230925_1", // "YYYYMMDD_No."
	date: "2023.9.25",
	title: "My First Post",
	keyWords: "Web; Next.js",
	topic: "Web",
};

export default function Post20230925_1() {
	return (
		<div>
			<Header title="Post" subtitle="2023.09.25" subsubtitle="My First Post" />
			<Heading1 content="Introduction" />
			<div>This is my very first post.</div>
		</div>
	);
}
