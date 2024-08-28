import { Heading1 } from "@/app/components/Heading";
import { DefaultButton } from "@/app/components/DefaultButton";

export default function Contact() {
	return (
		<div>
			<Heading1 content="Contact" />
			<div className="w-[30%] flex flex-col py-10 space-y-10">
				<DefaultButton
					label="LinkedIn"
					href="https://www.linkedin.com/in/dahao-tang/"
					target="_blank"
					rel="noopener noreferrer"
					additionalButtonClasses="hover:outline-rose-800 hover:bg-rose-800"
				/>
				<DefaultButton
					label="Github"
					href="https://github.com/DahaoTang"
					target="_blank"
					rel="noopener noreferrer"
					additionalButtonClasses="hover:outline-rose-800 hover:bg-rose-800"
				/>
				<DefaultButton
					label="dahao.tang@sydney.edu.au"
					href="mailto:dahao.tang@sydney.edu.au"
					additionalButtonClasses="hover:outline-sky-800 hover:bg-sky-800"
				/>
				<DefaultButton
					label="dahaotang.work@gmail.com"
					href="mailto:dahaotang.work@gmail.com"
					additionalButtonClasses="hover:outline-sky-800 hover:bg-sky-800"
				/>
			</div>
		</div>
	);
}
