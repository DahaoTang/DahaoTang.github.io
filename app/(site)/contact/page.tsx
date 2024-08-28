import { Heading1 } from "@/app/components/Heading";
import { DefaultButton } from "@/app/components/DefaultButton";

export default function Contact() {
	return (
		<div>
			<Heading1 content="Contact" />
			<div className="grid grid-cols-2 gap-5 pt-5">
				<DefaultButton
					label="LinkedIn"
					href="https://www.linkedin.com/in/dahao-tang/"
					target="_blank"
					rel="noopener noreferrer"
					additionalButtonClasses="hover:text-rose-500"
				/>
				<DefaultButton
					label="Github"
					href="https://github.com/DahaoTang"
					target="_blank"
					rel="noopener noreferrer"
					additionalButtonClasses="hover:text-rose-500"
				/>
				<DefaultButton
					label="Univeristy Email"
					href="mailto:dahao.tang@sydney.edu.au"
					additionalButtonClasses="hover:text-sky-500"
				/>
				<DefaultButton
					label="Gmail"
					href="mailto:dahaotang.work@gmail.com"
					additionalButtonClasses="hover:text-sky-500"
				/>
			</div>
		</div>
	);
}
