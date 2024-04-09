"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Avatar from "@/app/components/Avatar";
import SidebarButton from "@/app/(site)/components/sidebar/SidebarButton";
import SidebarContactButton from "@/app/(site)/components/sidebar/SidebarContactButton";

import { FaGithub, FaGoogle, FaLinkedin, FaUniversity } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import SidebarSubButton from "./SidebarSubButton";

export default function Sidebar() {
	const router = useRouter();

	const [showProjects, setShowProjects] = useState(false);

	return (
		// <div className="w-full h-full flex flex-col bg-gradient-to-br from-amber-100 from-3% via-emerald-300 via-30% to-sky-300 to-90%">
		<div className="w-full h-full flex flex-col bg-red-900">
			<div className="p-[15%]">
				<Avatar />
			</div>
			<div className="w-full h-[39%] flex flex-col">
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
								router.push(`/projects/startup`);
							}}
						>
							Startups
						</SidebarSubButton>
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
			</div>
			<div className="w-full bg-opacity-50 bg-neutral-100">
				<SidebarContactButton icon={<FaLinkedin />} hiddenWords="LinkedIn">
					<a
						href={`https://www.linkedin.com/in/dahao-tang/`}
						target="_blank"
						rel="noopener noreferrer"
					>
						linkedin.com/in/dahao-tang
					</a>
				</SidebarContactButton>
				<SidebarContactButton icon={<FaGithub />} hiddenWords="GitHub">
					<a
						href={`https://github.com/DahaoTang`}
						target="_blank"
						rel="noopener noreferrer"
					>
						github.com/DahaoTang
					</a>
				</SidebarContactButton>
				<SidebarContactButton icon={<FaUniversity />} hiddenWords="USYD">
					<a
						href={`https://www.sydney.edu.au/`}
						target="_blank"
						rel="noopener noreferrer"
					>
						dtan3316@uni.sydney.edu.au
					</a>
				</SidebarContactButton>
				<SidebarContactButton icon={<FaGoogle />} hiddenWords="Gmail">
					dahaotang.work@gmail.com
				</SidebarContactButton>
			</div>
		</div>
	);
}
