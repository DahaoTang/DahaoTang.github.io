import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
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
        <div className="w-screen min-h-screen flex justify-center">
          <div className="max-w-[812px] text-sm text-neutral-900 bg-white">
            <main className="pt-10 xl:pl-30 lg:pl-25 md:pl-20 pl-15 pr-15">
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
