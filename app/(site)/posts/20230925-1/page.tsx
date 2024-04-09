"use client";

import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export default function Post20230925_1() {
	return (
		<div>
			<Header
				title="Post"
				titleurl="/posts"
				subtitle="2023.09.25"
				subsubtitle="Test Post"
			/>
			<Heading1 content="Introduction" />
			<div>Place Holder</div>
		</div>
	);
}
