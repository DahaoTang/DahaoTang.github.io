import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const collaboratedProjectsTableColumns = [
	"Period",
	"Name",
	"Area",
	"Description",
	"URL",
];

const collaboratedProjects = [
	{
		Period: "2024 JUL - Present",
		Name: "ProteHome",
		Area: "Biology, Dataset, AI",
		Description: "Project with Prof. David James at Charles Perkins Centre",
		URL: "",
	},
];

export default function CollaboratedProjects() {
	return (
		<div>
			<Heading1 content="Research Projects" />
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={collaboratedProjects}
						itemsPerPage={10}
						columnNames={collaboratedProjectsTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
