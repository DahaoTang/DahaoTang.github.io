import React from "react";

interface DefaultButtonProps {
	label: string;
	href?: string;
	target?: string;
	rel?: string;
	textClasses?: string;
	additionalButtonClasses?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
	label,
	href,
	target,
	rel,
	textClasses = "",
	additionalButtonClasses = "",
}) => {
	return (
		<button
			className={`px-3 py-2 outline outline-neutral-900 hover:bg-neutral-900 hover:text-white ${additionalButtonClasses}`}
		>
			<a className={`${textClasses}`} href={href} target={target} rel={rel}>
				{label}
			</a>
		</button>
	);
};

export { DefaultButton };
