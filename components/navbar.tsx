"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "https://blog.dahaotang.com" },
    // { name: "Projects", href: "/projects" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-6">
        {/* --- LOGO --- */}
        <div className="flex items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/signature.png"
              alt="Dahao Tang Signature"
              width={150}
              height={50}
              priority
              className="h-8 w-auto object-contain grayscale contrast-150 brightness-110 dark:invert"
            />
          </Link>
        </div>

        {/* --- DESKTOP NAV --- */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- MOBILE TOGGLE --- */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="-mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      {isOpen && (
        <div
          // FIXED:
          // 1. Changed 'fixed' to 'absolute' so it hangs off the header correctly.
          // 2. Changed 'top-14' to 'top-full' (starts exactly where header ends).
          // 3. Added 'h-[calc(100vh-3.5rem)]' so it fills the rest of the screen exactly.
          className="md:hidden absolute top-full left-0 w-full h-[calc(100vh-3.5rem)] z-40 overflow-y-auto bg-background/30 backdrop-blur-lg supports-backdrop-filter:bg-background/80"
        >
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col space-y-6 items-end">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
