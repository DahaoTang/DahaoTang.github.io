"use client";

export default function DownloadCV() {
	return (
		<div className="relative w-full h-full flex items-center justify-center">
			<div className="relative">
				<div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75"></div>
				<a
					className="relative rounded-lg px-7 py-4 text-white"
					href="Dahao_Tang_CV.pdf"
					download
				>
					Download CV
				</a>
			</div>
		</div>
	);
}
