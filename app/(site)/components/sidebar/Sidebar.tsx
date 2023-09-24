"use client";

import { useRouter } from "next/navigation";

import Avatar from "@/app/components/Avatar";
import SidebarButton from "@/app/(site)/components/sidebar/SidebarButton";
import SidebarContactButton from "./SidebarContactButton";

import { FaGoogle, FaLinkedin, FaUniversity } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

export default function Sidebar() {
	const router = useRouter();

	return (
		<div className="w-full h-full flex flex-col bg-sky-900">
			<div className="p-[15%]">
				<Avatar />
			</div>
			<div className="w-full h-[50%] flex flex-col">
				<SidebarButton
					onClick={() => {
						router.push("/");
					}}
				>
					Home
				</SidebarButton>
				<SidebarButton
					onClick={() => {
						router.push("/projects");
					}}
				>
					Projects
				</SidebarButton>
				<SidebarButton>Posts</SidebarButton>
				<SidebarButton>Moments</SidebarButton>
			</div>
			<div className="w-full bg-neutral-300">
				<SidebarContactButton
					icon={<FaLinkedin />}
					hiddenWords="LinkedIn"
					onClick={() => {
						router.push(`https://www.linkedin.com/in/dahao-tang/`);
					}}
				>
					Dahao Tang
				</SidebarContactButton>
				<SidebarContactButton
					icon={<FaUniversity />}
					hiddenWords="USYD"
					onClick={() => {
						router.push(`https://www.sydney.edu.au/`);
					}}
				>
					dtan3316@uni.sydney.edu.au
				</SidebarContactButton>
				<SidebarContactButton icon={<MdBusinessCenter />} hiddenWords="GigHero">
					dahao@gighero.com.au
				</SidebarContactButton>
			</div>
		</div>
	);
}
