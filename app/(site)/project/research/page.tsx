import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const researchProjectsTableColumns = [
	"Period",
	"Name",
	"Area",
	"Description",
	"URL",
];

const researchProjects = [
	{
		Period: "2024 - Now",
		Name: "TBD",
		Area: "AI",
		Description: "Contrl theory on LLMs",
		URL: "",
	},
];

export default function ResearchProjects() {
	return (
		<div>
			<Heading1 content="Research Projects" />
			<div className="pt-3">
				<PaginatedList
					items={researchProjects}
					itemsPerPage={10}
					columnNames={researchProjectsTableColumns}
				/>
			</div>
		</div>
	);
}
