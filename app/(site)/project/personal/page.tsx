import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const personalProjectsTableColumns = [
	"Period",
	"Name",
	"Industry",
	"Description",
	"URL",
];

const personalProjects = [
	{
		Period: "2024 Jan - Now",
		Name: "ioulia",
		Industry: "AIGC",
		Description: "A Tarot-based spiritual support chatbot",
		URL: "https://ioulia.app",
	},
	{
		Period: "2023 Mar - Now",
		Name: "GigHero",
		Industry: "Marketplace",
		Description: "Online marketplace for onsite services",
		URL: "https://gighero.com.au",
	},
];

export default function PersonalProjects() {
	return (
		<div>
			<Heading1 content="Personal Projects" />
			<div className="pt-3">
				<PaginatedList
					items={personalProjects}
					itemsPerPage={10}
					columnNames={personalProjectsTableColumns}
				/>
			</div>
		</div>
	);
}
