"use client";

import { useState, useRef, useEffect, FC } from "react";

// Define props types
interface DropdownMenuItem {
	text: string;
	href: string;
}

interface DropdownMenuProps {
	triggerText: string;
	items: DropdownMenuItem[];
}

const DropdownMenu: FC<DropdownMenuProps> = ({ triggerText, items }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Toggle function for dropdown
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div ref={dropdownRef} className="relative">
			<button
				className="px-4 py-2"
				onClick={toggleDropdown}
			>
				{triggerText}
			</button>
			{isOpen && (
				<div className="absolute left-0 w-full bg-white mt-1 overflow-hidden">
					{items.map((item, index) => (
						<a
							key={index}
							href={item.href}
							className="block px-4 py-2 text-sm  hover:bg-neutral-900 hover:text-white"
						>
							{item.text}
						</a>
					))}
				</div>
			)}
		</div>
	);
};

export default DropdownMenu;