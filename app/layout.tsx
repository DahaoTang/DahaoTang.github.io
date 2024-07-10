import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import Headbar from "@/app/components/Headbar";
import { Noto_Sans } from "next/font/google";

const noto_sans = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
});

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
					{/* Magic screen width for my love */}
					<div className="min-w-screen max-w-[812px] w-full min-h-screen flex flex-col bg-white">
						<div className="sticky top-0 z-10 h-[42px] bg-white">
							<Headbar />
						</div>
						<main className="flex-grow p-10">
							{children} <Analytics />
						</main>
						<div className="sticky bottom-0 z-10 h-[42px] pb-3 pt-2 flex items-center justify-center bg-white">
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
				</div>
			</body>
		</html>
	);
}
