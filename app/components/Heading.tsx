interface HeadingProps {
	content?: string;
	subcontent?: string;
}

const Heading1 = ({ content, subcontent, ...rest }: HeadingProps) => {
	return (
		<div className="flex text-xl font-bold">
			{content}
			<div>{subcontent}</div>
		</div>
	);
};

const Heading2 = ({ content, subcontent, ...rest }: HeadingProps) => {
	return (
		<div className="flex text-lg font-semibold">
			{content} <div>{subcontent}</div>
		</div>
	);
};

const Heading3 = ({ content, subcontent, ...rest }: HeadingProps) => {
	return (
		<div className="flex text-md font-semibold">
			{content}
			<div className="ml-3 text-md font-normal italic text-neutral-500">
				{subcontent}
			</div>
		</div>
	);
};

const Heading4 = ({ content, subcontent, ...rest }: HeadingProps) => {
	return (
		<div className="flex text-md italic text-neutral-500">
			{content}
			<div>{subcontent}</div>
		</div>
	);
};

const Hr = () => {
	return <hr className="mb-[9px] border-neutral-300" />;
};

export { Heading1, Heading2, Heading3, Heading4, Hr };
