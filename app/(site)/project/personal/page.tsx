import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const personalProjectsTableColumns = [
	"Period",
	"Name",
	"Area",
	"Description",
	"URL",
];

const personalProjects = [
	{
		Period: "2025 Jan",
		Name: "Latex CV",
		Area: "Latex",
		Description:
			"Latex CV in both Chinese and English",
		URL: "https://github.com/DahaoTang/cv-latex",
	},
	{
		Period: "2024 June",
		Name: "Personal Website Update",
		Area: "Web, Next.js, Tailwind",
		Description:
			"An update in personal website. Extremely simple. Suitable for difference screen sizes.",
		URL: "https://github.com/DahaoTang/DahaoTang.github.io",
	},
	{
		Period: "2024 May",
		Name: "CLIP-based Image Search",
		Area: "CLIP, AI",
		Description:
			"A straightforward image search application using CLIP, developed through a simple Next.js-based website interface.",
		URL: "https://github.com/DahaoTang/clip-based-image-search",
	},
	{
		Period: "2023 Dec",
		Name: "Next.js Authentication Template",
		Area: "Authentication, Next.js",
		Description: "Next.js Project Authentication Template",
		URL: "https://github.com/DahaoTang/nextjs-auth-server-action-template",
	},
];

export default function PersonalProjects() {
	return (
		<div>
			<Heading1 content="Personal Projects" />
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={personalProjects}
						itemsPerPage={10}
						columnNames={personalProjectsTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
