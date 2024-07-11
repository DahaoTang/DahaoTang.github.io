"use client";

interface ContactButtonProps {
	content: string;
	url: string;
}

export default function ContactButton({ content, url }: ContactButtonProps) {
	return (
		<div>
			{/* <button className="px-3 py-2 outline outline-neutral-900 hover:bg-neutral-900 hover:text-white"> */}
			<a
				className="hover:text-red-300"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{content}
			</a>
			{/* </button> */}
		</div>
	);
}
