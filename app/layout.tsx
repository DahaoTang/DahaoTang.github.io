import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Headbar from "@/app/components/Headbar";

const noto_sans = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dahao Tang Personal Website",
	description: "3.0",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${noto_sans.className} flex flex-col min-h-screen`}>
				<div className="flex justify-center text-neutral-900">
					{/* The size of the website is set to a fixed 768px, the small screen width chosen by openai.com */}
					<div className="w-[768px] flex flex-col min-h-screen outline outline-red-300">
						<div className="sticky top-0 z-10 h-[42px] bg-white outline outline-blue-300">
							<Headbar />
						</div>
						<div className="flex-grow p-10">{children}</div>
						<div className="sticky bottom-0 z-10 h-[24] flex items-center justify-center bg-white outline outline-green-300">
							Developed by
							<a
								className=""
								href="https://dahaotang.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								&nbsp;Dahao Tang&nbsp;
							</a>
							| 2024
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
