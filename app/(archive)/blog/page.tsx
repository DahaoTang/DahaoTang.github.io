import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const blogsTableColumns = ["Date", "Title", "Topic", "Description", "URL"];

const blogs = [
	{
		Date: "2024 May 21",
		Title: "Reflections on Reflection",
		Topic: "LLM, Chain of thoughts",
		Description: "A reflection on LLM best practice",
		URL: "blog/20240521_1",
	},
];

export default function Blogs() {
	return (
		<div>
			<Heading1 content="Blogs" />
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={blogs}
						itemsPerPage={10}
						columnNames={blogsTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
