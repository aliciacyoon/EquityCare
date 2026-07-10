"use client";

import Link from "next/link";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/apply", label: "Apply" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${plusJakartaSans.className} drop-shadow-lg bg-[#f26f07] text-[#333333]`}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/logo.jpeg"
            width={100}
            height={100}
            alt="EquityCare Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
          <Link className="bg-[#AA302C] text-white rounded-md px-3 py-1 whitespace-nowrap" href="#">
            Donate Now
          </Link>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-6 bg-[#333333] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#333333] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#333333] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 border-t border-[#e06000]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-1 text-lg" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="#"
            className="self-start bg-[#AA302C] text-white rounded-md px-4 py-2 whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
