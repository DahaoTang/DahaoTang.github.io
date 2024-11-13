import Image from "next/image";

export default function Avatar() {
	return (
		<div>
			<Image
				className="rounded-full"
				src="/dahao.jpg"
				alt="Dahao Profile Picture"
				width={32}
				height={32}
			/>
		</div>
	);
}
