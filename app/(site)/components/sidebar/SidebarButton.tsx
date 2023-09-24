"use client";

import { ButtonHTMLAttributes } from "react";

interface SidebarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function SidebarButton({ children }: SidebarButtonProps) {
	return (
		<button className="p-3 text-neutral-100 hover:font-bold">{children}</button>
	);
}
