import { Analytics } from "@vercel/analytics/react";

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
				<div className="flex justify-center text-neutral-900 text-sm">
					<div className="min-w-screen max-w-[812px] flex flex-col min-h-screen bg-white">
						<div className="sticky top-0 z-10 h-[42px]">
							<Headbar />
						</div>
						<div className="flex-grow p-10">{children}</div>
						<div className="sticky bottom-0 z-10 h-[42px] pb-3 pt-2 flex items-center justify-center">
							Developed by
							<a
								className="hover:text-red-300"
								href="https://dahaotang.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								&nbsp;Dahao Tang&nbsp;
							</a>
							| 2024
						</div>
					</div>
					<Analytics />
				</div>
			</body>
		</html>
	);
}
