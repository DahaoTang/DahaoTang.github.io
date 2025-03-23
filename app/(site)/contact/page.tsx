import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";
import Contact from "./page.backup";

const contactTableColumns = ["Contact", "Value", "URL"];

const Contacts = [
	{
		Contact: "LinkedIn",
		Value: "dahaotang",
		URL: "https://www.linkedin.com/in/dahaotang/",
	},
	{
		Contact: "GitHub",
		Value: "DahaoTang",
		URL: "https://github.com/DahaoTang",
	},
	{
		Contact: "X/Twitter",
		Value: "dahaotang",
		URL: "https://x.com/dahaotang",
	},
	{
		Contact: "Email",
		Value: "dahao【.】tang【@】sydney【.】edu【.】au",
		URL: "",
	},
];

export default function ContactPage() {
	return (
		<div>
			<div className="flex justify-center pt-3">
				<div className="flex-grow">
					<PaginatedList
						items={Contacts}
						itemsPerPage={10}
						columnNames={contactTableColumns}
					/>
				</div>
			</div>
		</div>
	);
}
