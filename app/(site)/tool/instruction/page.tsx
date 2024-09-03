import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const ToolsTableColumns = ["Title", "Description", "Feature", "URL"];

const tools = [
	{
		Title: "oh-my-zsh",
		Description: "Config file for oh-my-zsh",
		Feature: "Full content read and copy",
		URL: "/tool/instruction/omz.md",
	},
];

export default function Instruction() {
	return (
		<div className="">
			<Heading1 content="Instruction Files" />
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={tools}
						itemsPerPage={10}
						columnNames={ToolsTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
