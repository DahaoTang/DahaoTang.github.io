"use client";

import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export default function Post20230925_1() {
	return (
		<div>
			<Header title="Post" subtitle="2023.09.25" subsubtitle="My First Post" />
			<Heading1 content="Introduction" />
			<div>This is my very first post, which works as a test file as well.</div>
		</div>
	);
}
