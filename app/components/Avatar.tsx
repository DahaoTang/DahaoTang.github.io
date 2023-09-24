import Image from "next/image";

export default function Avatar() {
	return (
		<div>
			<Image
				className="rounded-full"
				src="/images/dahao.jpg"
				alt="Dahao Profile Picture"
				width={300} // Original width of image
				height={300} // Original height of image
				layout="responsive"
			/>
		</div>
	);
}
