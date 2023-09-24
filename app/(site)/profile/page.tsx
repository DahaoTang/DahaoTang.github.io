"use client";

import Sidebar from "@/app/(site)/components/sidebar/Sidebar";

export default function Profile() {
	return (
		<div className="w-full h-full flex flex-row">
			<div className="w-[18%] min-w-[120px]">
				<Sidebar />
			</div>
			<div className="w-full">
				<div className="pt-10 pb-10 pl-3 text-lg bg-red-500">
					Under Maintenance: Switching to Next.js 13
				</div>
			</div>
		</div>
	);
}
