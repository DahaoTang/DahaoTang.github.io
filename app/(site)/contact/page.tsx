"use client";

import { useState } from "react";
import { Heading1 } from "@/app/components/Heading";
import { DefaultButton } from "@/app/components/DefaultButton";

export default function Contact() {
	const [copyUniEmailSuccess, setCopyUniEmailSuccess] = useState<string>("");
	const [copyGmailSuccess, setCopyGmailSuccess] = useState<string>("");

	return (
		<div>
			<Heading1 content="Contact" />
			<div className="w-[100%] flex flex-col py-10 space-y-10">
				<DefaultButton
					label="LinkedIn"
					href="https://www.linkedin.com/in/dahaotang/"
					target="_blank"
					rel="noopener noreferrer"
					additionalButtonClasses="hover:outline-rose-500 hover:bg-rose-500"
				/>
				<DefaultButton
					label="Github"
					href="https://github.com/DahaoTang"
					target="_blank"
					rel="noopener noreferrer"
					additionalButtonClasses="hover:outline-rose-500 hover:bg-rose-500"
				/>
				<div className="flex items-center">
					<button
						onClick={() => {
							navigator.clipboard.writeText("dahao.tang@sydney.edu.au").then(
								() => {
									setCopyUniEmailSuccess("Uni email copied!");
									setCopyGmailSuccess("");
								},
								() => {
									setCopyUniEmailSuccess("Failed to copy!");
								}
							);
						}}
						className="w-full px-3 py-2 outline outline-neutral-900 hover:outline-sky-500 hover:bg-sky-500 hover:text-white"
					>
						{copyUniEmailSuccess && <div>Uni email copied!</div>}
						{!copyUniEmailSuccess && <div>dahao.tang@sydney.edu.au</div>}
					</button>
				</div>
				<div className="flex items-center">
					<button
						onClick={() => {
							navigator.clipboard.writeText("dahaotang.work@gmail.com").then(
								() => {
									setCopyGmailSuccess("Gmail copied!");
									setCopyUniEmailSuccess("");
								},
								() => {
									setCopyGmailSuccess("Failed to copy!");
								}
							);
						}}
						className="w-full px-3 py-2 outline outline-neutral-900 hover:outline-sky-500 hover:bg-sky-500 hover:text-white"
					>
						{copyGmailSuccess && <div>Gmail copied!</div>}
						{!copyGmailSuccess && <div>dahaotang.work@gmail.com</div>}
					</button>
				</div>
			</div>
		</div>
	);
}
