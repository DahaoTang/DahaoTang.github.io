"use client";

import { useRouter } from "next/navigation";

interface HeaderProps {
	title?: string;
	titleurl?: string;
	subtitle?: string;
	subtitleurl?: string;
	subsubtitle?: string;
	subsubtitleurl?: string;
}

export default function Header({
	title,
	titleurl,
	subtitle,
	subtitleurl,
	subsubtitle,
	subsubtitleurl,
	...rest
}: HeaderProps) {
	const router = useRouter();
	return (
		<div className="w-full items-end flex flex-row ">
			<div
				className="text-3xl font-bold text-neutral-900 pr-5"
				onClick={() => {
					if (titleurl) {
						router.push(`${titleurl}`);
					}
				}}
			>
				{title}
			</div>
			{subtitle && <div className="pb-1 pr-1 text-neutral-500 text-sm">〉</div>}
			<div
				className="text-2xl font-bold text-neutral-700 pr-5"
				onClick={() => {
					if (subtitleurl) {
						router.push(`${subtitleurl}`);
					}
				}}
			>
				{subtitle}
			</div>
			{subsubtitle && (
				<div className="pb-1 pr-1 text-neutral-500 text-sm">〉</div>
			)}
			<div
				className="text-2xl text-sky-700"
				onClick={() => {
					if (subsubtitleurl) {
						router.push(`${subsubtitleurl}`);
					}
				}}
			>
				{subsubtitle}
			</div>
		</div>
	);
}
