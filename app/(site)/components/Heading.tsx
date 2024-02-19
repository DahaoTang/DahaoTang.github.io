"use client";

interface HeadingProps {
	content?: string;
}

const Heading1 = ({ content, ...rest }: HeadingProps) => {
	return (
		<div>
			{/* <div className="pt-5 pb-3 text-xl bg-gradient-to-r from-sky-500 from-10% via-fuchsia-500 via-30% to-rose-500 to-90% inline-block text-transparent bg-clip-text"> */}
			<div className="pt-5 pb-3 text-xl text-red-700">{content}</div>
		</div>
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
