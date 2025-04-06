import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { Roboto } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Outfit } from "next/font/google";
import { PT_Serif } from "next/font/google";

const roboto = Roboto({
	weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pt_serif = PT_Serif({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

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
            <main className="flex-grow p-10">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
