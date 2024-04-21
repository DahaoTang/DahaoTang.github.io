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
		<div className="pl-3 pr-2 pb-2 pt-2 hover:bg-opacity-30 hover:bg-neutral-500">
			<button
				{...rest}
				className="flex flex-row text-neutral-900 hover:text-amber-100 text-current"
			>
				{icon && <div className="pt-1 pr-2">{icon}</div>}
				<span className="break-all inline">{children}</span>
			</button>
		</div>
	);
}
