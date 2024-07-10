import Image from "next/image";

import DownloadCV from "@/app/components/DownloadCV";
import { Heading2 } from "@/app/components/Heading";

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
				<Heading2 content="USYD" />
				<p>Bachelor of Advanced Computing, majoring in Computer Science</p>
				<p>Bachelor of Commerce, majoring in Finance</p>
				<p>WAM: Distinction; GPA: 3.8</p>
			</div>
			<div className="mt-[15px]">
				<Heading2 content="Mensa" />
				<p>Australian Mensa member: ID 11196</p>
			</div>
			<div className="mt-[42px]">
				<DownloadCV />
			</div>
		</div>
	);
}
