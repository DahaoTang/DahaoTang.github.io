import Image from "next/image";

import { Heading2, Heading3, Heading4, Hr } from "@/app/components/Heading";
import { DefaultButton } from "@/app/components/DefaultButton";

export default function Home() {
	return (
		<div>
			<div className="mt-[36px]">
				<Image
					src="/images/Dahao_Tang_Signature.jpg"
					alt="Dahao Tang Signature"
					width={700}
					height={500}
				/>
			</div>
			<div className="mt-[72px]">
				<Heading2 content="Education" />
				<div className="w-[42%] min-w-[240px]">
					<Hr />
				</div>
				<Heading3 content="USYD" subcontent="2021 - 2025" />
				<p className="mt-1">
					Bachelor of Advanced Computing, majoring in Computer Science
				</p>
				<p>Bachelor of Commerce, majoring in Finance</p>
				<p>WAM: Distinction</p>
			</div>
			<div className="mt-[24px]">
				<Heading2 content="Experience" />
				<div className="w-[42%] min-w-[240px]">
					<Hr />
				</div>
				<Heading3 content="USYD Casual Academic" subcontent="2024 Aug - Now" />
				<p className="mt-1">
					{" "}
					<a
						className="hover:text-red-300"
						href="https://www.sydney.edu.au/units/ISYS2120"
						target="_blank"
						rel="noopener noreferrer"
					>
						ISYS2120: Data and Information Management
					</a>
					&nbsp;- Academic Tutor
				</p>
			</div>
			<div className="mt-[24px]">
				<Heading2 content="Licenses & Certifications" />
				<div className="w-[42%] min-w-[240px]">
					<Hr />
				</div>
				<Heading3 content="Mensa" subcontent="Tested and Issued 2023 Jun" />
				<p className="mt-1">Australian Mensa member: ID 11196</p>
				<p className="mt-1">Stand Score 141; Percentile Rank: 99.7</p>
			</div>
			<div className="mt-[42px]">
				<DefaultButton label="Download CV" href="Dahao_Tang_CV.pdf" />
			</div>
		</div>
	);
}
