import Sidebar from "@/app/(site)/components/Sidebar";

export default function Home() {
	return (
		<div className="w-full h-full flex flex-row">
			<div className="w-[18%] min-w-[120px] bg-blue-300">
				<Sidebar />
			</div>
			<div className="w-full"></div>
		</div>
	);
}
