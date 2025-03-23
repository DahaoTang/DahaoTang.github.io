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
		Period: "2025 Feb - Present",
		Name: "TBD",
		Area: "Biology, ML/DL/AI",
		Description:
			"Honours project with Prof. Tongliang Liu and Prof. David E. James",
		URL: "",
	},
	{
		Period: "2024 - Present",
		Name: "TBD",
		Area: "Scaling Law, Control Theory, ML/DL/AI",
		Description: "Contrl theory on LLMs",
		URL: "",
	},
	{
		Period: "2024 Aug - 2024 Sep",
		Name: "Stability-Driven CNN Training with Lyapunov-Based Dynamic Learning Rate",
		Area: "DL, Control Theory, Lyapunov Stability Analysis",
		Description: "Paper for 2024 Australasian Database Conference",
		URL: "https://link.springer.com/chapter/10.1007/978-981-96-1242-0_5",
	},
];

export default function ResearchProjects() {
	return (
		<div>
			<Heading1 content="Research Projects" />
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={researchProjects}
						itemsPerPage={10}
						columnNames={researchProjectsTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
