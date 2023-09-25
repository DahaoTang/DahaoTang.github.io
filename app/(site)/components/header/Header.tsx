"use client";

interface HeaderProps {
	title?: string;
	subtitle?: string;
	subsubtitle?: string;
}

export default function Header({
	title,
	subtitle,
	subsubtitle,
	...rest
}: HeaderProps) {
	return (
		<div className="w-full items-end flex flex-row ">
			<div className="text-3xl font-bold text-neutral-900 pr-5">{title}</div>
			{subtitle && <div className="pb-1 pr-1 text-neutral-500">〉〉</div>}
			<div className="text-2xl font-bold text-neutral-700 pr-5">{subtitle}</div>
			{subsubtitle && <div className="pb-1 pr-1 text-neutral-500">〉〉</div>}
			<div className="text-2xl text-sky-700">{subsubtitle}</div>
		</div>
	);
}
