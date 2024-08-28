"use client";

import React, { useEffect, useState } from "react";

import { Heading1 } from "@/app/components/Heading";

interface ToolPageProps {
	params: {
		filename: string[];
	};
}

const ToolPage: React.FC<ToolPageProps> = ({ params }) => {
	const [content, setContent] = useState<string>("");
	const [filename, setFilename] = useState<string>("");
	const [copySuccess, setCopySuccess] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			const fullFilename = params.filename.join(".");
			const res = await fetch(`/api/tools/${fullFilename}`);
			if (res.ok) {
				const data = await res.json();
				setContent(data.content);
				setFilename(data.filename);
			} else {
				setContent("File not found");
			}
		};

		fetchData();
	}, [params.filename]);

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText(content).then(
			() => {
				setCopySuccess("Copied to clipboard!");
			},
			() => {
				setCopySuccess("Failed to copy!");
			}
		);
	};

	return (
		<div style={{ padding: "20px" }}>
			<button
				onClick={handleCopyToClipboard}
				className="px-3 py-2 outline outline-neutral-900 hover:bg-neutral-900 hover:text-green-300"
			>
				<Heading1 content={`${filename}`} />
			</button>
			{copySuccess && <span className="ml-5">{copySuccess}</span>}
			<pre className="whitespace-pre-wrap break-words mt-10">{content}</pre>
		</div>
	);
};

export default ToolPage;
