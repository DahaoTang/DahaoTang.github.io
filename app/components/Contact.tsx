import ContactButton from "@/app/components/ContactButton";
import { Heading1, Heading2 } from "@/app/components/Heading";

export default function Contact() {
	return (
		<div>
			<div className="flex flex-row">
				<div className="pl-1">
					<ContactButton
						content="Linkedin"
						url="https://www.linkedin.com/in/dahao-tang/"
					/>
				</div>
				<div className="px-1">
					<ContactButton content="GitHub" url="https://github.com/DahaoTang" />
				</div>
				<div>
					|
					<a
						className="pl-1 hover:text-blue-300"
						href="mailto:dahaotang.work@gmail.com"
					>
						dahaotang.work [at] gmail.com
					</a>
				</div>
			</div>
		</div>
	);
}
