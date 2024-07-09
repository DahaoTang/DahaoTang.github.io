"use client";

interface HeadingProps {
	content?: string;
}

const Heading1 = ({ content, ...rest }: HeadingProps) => {
	return <div className="text-xl font-bold">{content}</div>;
};

const Heading2 = ({ content, ...rest }: HeadingProps) => {
	return <div className="text-lg font-semibold">{content}</div>;
};

export { Heading1, Heading2 };
