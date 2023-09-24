import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Dahao Website",
	description: "Dahao Tang's personal website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={outfit.className}>{children}</body>
		</html>
	);
}
