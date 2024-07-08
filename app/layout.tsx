import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

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
				<div className="flex justify-center">
					<div className="w-[768px] outline outline-red-300">{children}</div>
				</div>
			</body>
		</html>
	);
}
