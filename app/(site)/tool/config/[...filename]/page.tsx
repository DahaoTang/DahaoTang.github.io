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
			const res = await fetch(`/api/file/${fullFilename}`);
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
		<div className="p-[20px]">
			<div className="flex items-center space-x-4">
				<Heading1 content={`${filename}`} />
				<button className="px-2 py-1 outline outline-neutral-900 hover:bg-neutral-900 hover:text-white">
					<a className="" href={`/files/${filename}`} download>
						Download
					</a>
				</button>
				<button
					onClick={handleCopyToClipboard}
					className="px-2 py-1 outline outline-neutral-900 hover:bg-neutral-900 hover:text-green-300"
				>
					Copy
				</button>
				{copySuccess && <span className="ml-5">{copySuccess}</span>}
			</div>

			<pre className="whitespace-pre-wrap break-words mt-10">{content}</pre>
		</div>
	);
};

export default ToolPage;
