import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Headbar from "@/app/components/Headbar";
import { Noto_Sans } from "next/font/google";

const noto_sans = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dahao Tang",
	description: "Dahao Tang's Personal Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={`${noto_sans.className}`}>
				<div className="flex justify-center text-neutral-900 text-sm">
					{/* Magic number screen width for my love */}
					<div className="min-w-screen max-w-[812px] w-full min-h-screen flex flex-col bg-white">
						<div className="sticky top-0 z-10 h-[42px] bg-white">
							<Headbar />
						</div>
						<main className="flex-grow p-10">
							{children}
							<Analytics />
							<SpeedInsights />
						</main>
						<div className="sticky bottom-0 z-10 h-[42px] pb-3 pt-2 flex items-center justify-center bg-white">
							Developed by
							<a
								className="hover:text-rose-300"
								href="https://dahaotang.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								&nbsp;Dahao Tang&nbsp;
							</a>
							| 2025
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
