"use client";

import { ButtonHTMLAttributes } from "react";

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SidebarButton({
	children,
	...rest
}: SidebarButtonProps) {
	return (
		<button
			{...rest}
			className="p-3 text-amber-100 hover:font-bold"
		>
			{children}
		</button>
	);
}
