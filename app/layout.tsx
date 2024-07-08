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
			<body className={noto_sans.className}>
				<div className="flex justify-center text-neutral-900">
					{/* The size of the website is set to a fixed 768px, the small screen width chosen by openai.com */}
					<div className="w-[768px] outline outline-red-300">
						<div className="h-[42px] outline outline-blue-300">
							<Headbar />
						</div>
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
