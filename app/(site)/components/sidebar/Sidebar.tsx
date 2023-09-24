"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Avatar from "@/app/components/Avatar";
import SidebarButton from "@/app/(site)/components/sidebar/SidebarButton";
import SidebarContactButton from "@/app/(site)/components/sidebar/SidebarContactButton";

import { FaGithub, FaLinkedin, FaUniversity } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import SidebarSubButton from "./SidebarSubButton";

export default function Sidebar() {
	const router = useRouter();

	const [showProjects, setShowProjects] = useState(false);

	return (
		<div className="w-full h-full flex flex-col bg-sky-900">
			<div className="p-[15%]">
				<Avatar />
			</div>
			<div className="w-full h-[45%] flex flex-col">
				<SidebarButton
					onClick={() => {
						router.push(`/`);
					}}
				>
					Home
				</SidebarButton>
				<SidebarButton
					onClick={() => {
						setShowProjects(!showProjects);
					}}
				>
					Projects
				</SidebarButton>
				{showProjects && (
					<div className="text-sm">
						<SidebarSubButton
							onClick={() => {
								router.push(`/projects/research`);
							}}
						>
							Research Projects
						</SidebarSubButton>
						<SidebarSubButton
							onClick={() => {
								router.push(`/projects/personal`);
							}}
						>
							Personal Projects
						</SidebarSubButton>
					</div>
				)}
				<SidebarButton
					onClick={() => {
						router.push(`/posts`);
					}}
				>
					Posts
				</SidebarButton>
				{/* <SidebarButton
					onClick={() => {
						router.push(`/poems_n_essays`);
					}}
				>
					Poems & Essays
				</SidebarButton> */}
			</div>
			<div className="w-full bg-neutral-300">
				<SidebarContactButton
					icon={<FaLinkedin />}
					hiddenWords="LinkedIn"
					onClick={() => {
						router.push(`https://www.linkedin.com/in/dahao-tang/`);
					}}
				>
					linkedin.com/in/dahao-tang
				</SidebarContactButton>
				<SidebarContactButton
					icon={<FaGithub />}
					hiddenWords="GitHub"
					onClick={() => {
						router.push(`https://github.com/DahaoTang`);
					}}
				>
					github.com/DahaoTang
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
