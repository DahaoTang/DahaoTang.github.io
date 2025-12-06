import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          outfit.variable
        )}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-6 pt-15 flex-1">
          {children}
        </main>
        <footer className="w-full border-t py-3 bg-background">
          <div className="mx-auto max-w-7xl px-6 text-center text-xs text-muted-foreground">
            Developed by Dahao Tang, Ver. 2025 Dec
          </div>
        </footer>
      </body>
    </html>
  );
}
