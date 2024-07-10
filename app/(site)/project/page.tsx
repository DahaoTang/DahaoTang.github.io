import { Heading1, Heading2 } from "@/app/components/Heading";

export default function Home() {
	return (
		<div>
			<Heading1 content="Dahao Tang" />
			<div className="pt-3">
				<Heading2 content="USYD" />
				<p>Bachelor of Advanced Computing, majoring in Computer Science</p>
				<p>Bachelor of Commerce, majoring in Finance</p>
				<p>WAM: Distinction; GPA: 3.8</p>
			</div>
			<div className="pt-3">
				<Heading2 content="Mensa" />
				<p>Australian Mensa member: ID 11196</p>
			</div>
		</div>
	);
}
