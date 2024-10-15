import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const startupsTableColumns = [
	"Period",
	"Name",
	"Industry",
	"Description",
	"URL",
];

const startups = [
	{
		Period: "2024 Jan - Now",
		Name: "ioulia",
		Industry: "AIGC",
		Description: "A Tarot-based spiritual support chatbot",
		URL: "",
	},
	{
		Period: "2023 Mar - Now",
		Name: "GigHero",
		Industry: "Marketplace",
		Description: "Online marketplace for onsite services",
		URL: "https://gighero.com.au",
	},
];

export default function Startups() {
	return (
		<div className="">
			<Heading1 content="Startups" />
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={startups}
						itemsPerPage={10}
						columnNames={startupsTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
