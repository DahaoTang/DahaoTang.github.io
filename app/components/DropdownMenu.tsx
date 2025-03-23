"use client";

import { useState, useRef, useEffect, FC } from "react";

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

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

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
			<button className="px-4 py-2" onClick={toggleDropdown}>
				<div className="p-2 hover:bg-neutral-900 hover:text-white">
					{triggerText}
				</div>
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
