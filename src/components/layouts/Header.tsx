"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 50) {
        header.classList.add("bg-[#013228]", "shadow-md", "fixed", "top-0");
      } else {
        header.classList.remove("bg-[#013228]", "shadow-md", "fixed", "top-0");
      }

      if (current > lastScroll.current && current > 80 && !mobileOpen) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Modules", href: "/modules" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="w-full relative transition-transform duration-300 z-[100] py-3"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo-3.svg"
            alt="Logo"
            width={180}
            height={40}
            className="w-32 sm:w-40"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-semibold text-white/90 hover:text-[#E3FFCD] transition-colors py-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <button className="flex items-center gap-2 bg-[#E3FFCD] rounded-full py-3 px-6 text-xs uppercase tracking-[0.1em] font-bold text-[#013228] hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#000]/10">
              Get Started
              <IoIosArrowRoundForward size={24} />
            </button>
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <HiOutlineX size={22} />
            ) : (
              <HiOutlineMenuAlt3 size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#013228] z-[99] transition-all duration-500 ease-in-out lg:hidden ${mobileOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
          }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          {/* Nav links */}
          <nav className="flex-1 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-3xl font-bold text-white/90 hover:text-[#E3FFCD] transition-all duration-300 py-4 border-b border-white/5 ${mobileOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
                  }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-white/10">
            <Link href="/contact" onClick={() => setMobileOpen(false)}>
              <button className="w-full flex items-center justify-center gap-2 bg-[#E3FFCD] rounded-2xl py-4 px-6 text-sm uppercase tracking-[0.1em] font-bold text-[#013228] active:scale-95 transition-transform shadow-lg">
                Get Started
                <IoIosArrowRoundForward size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
