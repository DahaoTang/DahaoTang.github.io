"use client";

import { ButtonHTMLAttributes } from "react";

interface SidebarSubButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SidebarSubButton({
	children,
	...rest
}: SidebarSubButtonProps) {
	return (
		<button {...rest} className="w-full p-3 bg-teal-300 text-neutral-700 hover:font-bold">
			{children}
		</button>
	);
}
