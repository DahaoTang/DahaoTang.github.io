"use client";

interface HeadingProps {
	content?: string;
}

const Heading1 = ({ content, ...rest }: HeadingProps) => {
	return (
		<div className="pt-5 pb-3 text-xl font-bold text-sky-700">{content}</div>
	);
};

const Heading2 = ({ content, ...rest }: HeadingProps) => {
	return (
		<div className="pt-3 pb-2 text-lg font-bold text-neutral-500">
			{content}
		</div>
	);
};

export { Heading1, Heading2 };