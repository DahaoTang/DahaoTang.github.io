"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface SidebarContactButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: ReactNode;
	hiddenWords?: string;
}

export default function SidebarContactButton({
	children,
	icon,
	hiddenWords,
	...rest
}: SidebarContactButtonProps) {
	return (
		<div className="pl-3 pr-3 pb-1 pt-1 hover:bg-neutral-400">
			<button
				{...rest}
				className="flex flex-row text-neutral-900 lg:text-current"
			>
				{icon && <div className="pt-1 pr-2">{icon}</div>}
				<span className="text-sm lg:hidden">{hiddenWords}</span>
				<span className="break-all hidden lg:inline">{children}</span>
			</button>
		</div>
	);
}
