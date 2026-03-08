import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "#", label: "X" },
  ];

  const platformLinks = [
    { name: "About Us", href: "/about" },
    { name: "Modules", href: "/modules" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const moduleLinks = [
    { name: "Core HR", href: "/modules/core-hr" },
    { name: "Leave Management", href: "/modules/leave-management" },
    { name: "HR Vault", href: "/modules/document-management" },
    { name: "Performance", href: "/modules/performance-management" },
    { name: "Payroll", href: "/modules/payroll-management" },
    { name: "Expenses", href: "/modules/expense-management" },
  ];

  return (
    <footer className="w-full bg-[#013228] text-white relative overflow-hidden">
      {/* Top decorative bar */}
      <div className="h-1 bg-gradient-to-r from-[#E3FFCD]/0 via-[#E3FFCD]/40 to-[#E3FFCD]/0" />

      {/* Newsletter banner */}
      <div className="border-b border-emerald-800/30">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-2">
              Stay in the Loop
            </h3>
            <p className="text-emerald-100/50 text-sm max-w-md">
              Get product updates, HR insights, and tips delivered to your
              inbox. No spam, ever.
            </p>
          </div>
          <div className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-80 px-5 py-3.5 rounded-2xl bg-white/5 border border-emerald-800/40 text-sm text-white placeholder:text-emerald-100/30 focus:outline-none focus:ring-2 focus:ring-[#E3FFCD]/30 focus:border-transparent transition-all"
            />
            <button className="flex items-center gap-2 bg-[#E3FFCD] text-[#013228] px-6 py-3.5 rounded-2xl font-bold text-sm hover:scale-105 transition-transform shrink-0">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo-3.svg"
                alt="Human Systems Logo"
                width={180}
                height={40}
                className="w-32 sm:w-40"
                priority
              />
            </Link>
            <p className="text-emerald-100/50 leading-relaxed text-sm max-w-xs">
              Empowering businesses with a scalable, secure, and modular HR
              platform — from employee management to payroll and beyond.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-100/60 hover:bg-[#E3FFCD] hover:text-[#013228] hover:border-transparent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E3FFCD] mb-8">
              Platform
            </h4>
            <ul className="space-y-4">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/50 hover:text-[#E3FFCD] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#E3FFCD] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Modules */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E3FFCD] mb-8">
              Modules
            </h4>
            <ul className="space-y-4">
              {moduleLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-emerald-100/50 hover:text-[#E3FFCD] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-[#E3FFCD] transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#E3FFCD] mb-8">
              Get in Touch
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3FFCD] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-emerald-100/70 leading-relaxed">
                    Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3FFCD] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <a
                    href="mailto:contact@humansystems.io"
                    className="text-sm text-emerald-100/70 hover:text-[#E3FFCD] transition-colors"
                  >
                    contact@humansystems.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E3FFCD] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <a
                    href="tel:+33123456789"
                    className="text-sm text-emerald-100/70 hover:text-[#E3FFCD] transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-800/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-100/30 text-xs">
            © {currentYear} Human Systems. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-emerald-100/30 hover:text-[#E3FFCD] text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-emerald-100/30 hover:text-[#E3FFCD] text-xs transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-emerald-100/30 hover:text-[#E3FFCD] text-xs transition-colors"
            >
              GDPR Compliance
            </a>
          </div>
        </div>
      </div>

      {/* Decorative blurs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E3FFCD]/3 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#E3FFCD]/3 blur-[100px] rounded-full translate-y-1/3 translate-x-1/3 pointer-events-none" />
    </footer>
  );
};

export default Footer;
