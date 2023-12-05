"use client";

import { Heading1 } from "@/app/(site)/components/Heading";
import Header from "@/app/(site)/components/header/Header";

export default function PersonalProject202309_1() {
	return (
		<div>
			<Header title="Personal Project" subtitle="Personal Website Upgrade" />
			<Heading1 content="Introduction" />
			The 2023 September monthly project is about upgrading my personal website,
			from a GitHub page implemented using Jekyll into the current version,
			implemented with Next.js 13.
			<Heading1 content="Outcome" />
			<p>
				Once you have read this line, it indicates the monthly project is
				already a small success.
			</p>
		</div>
	);
}
