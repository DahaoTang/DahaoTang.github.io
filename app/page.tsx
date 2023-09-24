import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="text-lg font-bold">Dahao Tang Personal Website</div>
			<div className="bg-red-300">
				Under Maintenance: Switching to Next.js 13
			</div>
			<Image src="/img/Dahao.JPG" alt="pic" width={300} height={300} />
		</div>
	);
}
