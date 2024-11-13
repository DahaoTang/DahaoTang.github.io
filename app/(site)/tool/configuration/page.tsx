import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const ToolsTableColumns = ["Title", "Description", "Feature", "URL"];

const tools = [
	{
		Title: "init.nvim",
		Description: "Config file for neovim",
		Feature: "Full content read and copy",
		URL: "/tool/configuration/init.nvim",
	},
];

export default function Config() {
	return (
		<div className="">
			<Heading1 content="Configuration Files" />
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
