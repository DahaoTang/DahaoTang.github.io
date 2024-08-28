import { Heading1 } from "@/app/components/Heading";
import ContactButton from "@/app/components/ContactButton";

export default function Contact() {
	return (
		<div>
			<Heading1 content="Contact" />
			<div className="pt-3">
				<ContactButton
					content="LinkedIn"
					url="https://www.linkedin.com/in/dahao-tang/"
				/>
			</div>
			<div className="pt-3">
				<ContactButton content="GitHub" url="https://github.com/DahaoTang" />
			</div>
			<div className="pt-3">
				<a
					className="hover:text-blue-300"
					href="mailto:dahao.tang@sydney.edu.au"
				>
					dahao.tang@sydney.edu.au
				</a>
			</div>
			<div className="pt-3">
				<a
					className="hover:text-blue-300"
					href="mailto:dahaotang.work@gmail.com"
				>
					dahaotang.work@gmail.com
				</a>
			</div>
		</div>
	);
}
