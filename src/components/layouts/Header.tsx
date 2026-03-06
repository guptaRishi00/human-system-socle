"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

export default function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScroll = useRef(0);

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

      if (current > lastScroll.current && current > 80) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "UI/UX Design", href: "/services/ui-ux" },
        { name: "SEO Optimization", href: "/services/seo" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      dropdown: [
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/faq" },
        { name: "Team", href: "/team" },
      ],
    },
    {
      name: "Blog",
      href: "#",
      dropdown: [
        { name: "Blog Grid", href: "/blog" },
        { name: "Blog Details", href: "/blog/details" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      ref={headerRef}
      className="w-full relative transition-transform duration-300 z-50 py-3"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
        <Image
          src="/logo-3.svg"
          alt="Logo"
          width={180}
          height={40}
          className="w-40"
        />

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link
                href={link.href}
                className="flex items-center gap-1.5 font-semibold text-white/90 hover:text-[#E3FFCD] transition-colors py-4"
              >
                {link.name}
                {link.dropdown && (
                  <IoChevronDown
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-180 opacity-70"
                  />
                )}
              </Link>

              {link.dropdown && (
                /* Improved Dropdown Container */
                <div className="absolute left-0 top-[90%] pt-4 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-[100]">
                  <div className="flex flex-col bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 min-w-[240px] p-2 overflow-hidden">
                    {link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="group/item flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:text-[#013228] hover:bg-[#F9FBF8] transition-all"
                      >
                        <span className="font-medium">{item.name}</span>
                        <IoIosArrowRoundForward
                          className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#013228]"
                          size={24}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button className="flex items-center gap-2 bg-[#E3FFCD] rounded-full py-3 px-6 text-xs uppercase tracking-[0.1em] font-bold text-[#013228] hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#000]/10">
          Get Started
          <IoIosArrowRoundForward size={24} />
        </button>
      </div>
    </header>
  );
}
