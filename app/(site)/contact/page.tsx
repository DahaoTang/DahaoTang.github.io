import { Heading1 } from "@/app/components/Heading";
import PaginatedList from "@/app/components/PaginatedList";

const contactTableColumns = ["Contact", "Value", "URL"];

const Contacts = [
	{
		Contact: "LinkedIn",
		Value: "https://www.linkedin.com/in/dahaotang/",
		URL: "https://www.linkedin.com/in/dahaotang/",
	},
	{
		Contact: "GitHub",
		Value: "https://github.com/DahaoTang",
		URL: "https://github.com/DahaoTang",
	},
	{
		Contact: "X/Twitter",
		Value: "https://x.com/dahaotang",
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
			{/* <Heading1 content="Contact Details" /> */}
			<div className="flex justify-center">
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
