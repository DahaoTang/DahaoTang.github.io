import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const ToolsTableColumns = ["Title", "Description", "Type", "URL"];

const tools = [
	{
		Title: "oh-my-zsh",
		Description: "Instructions for setting up oh-my-zsh",
		Type: "Instruction",
		URL: "/tool/omz.md",
	},
	{
		Title: "init.nvim",
		Description: "Config file for neovim",
		Type: "Configuration",
		URL: "/tool/init.nvim",
	},
];

export default function Tools() {
	return (
		<div className="">
			<Heading1 content="Instruction Files" />
			<div className="flex justify-center pt-3 pb-10">
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
