import React from "react";
import Image from "next/image";

const PricingHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden rounded-b-[50px] min-h-[600px] flex items-center">
    {/* --- Background Image Wrapper --- */}
    <div className="absolute inset-0 z-0">
      <Image
        // Using a high-quality, relevant image from Unsplash (structured office/growth theme)
        src="https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80"
        alt="Pricing Background"
        fill
        priority // Crucial for Hero sections to prevent layout shift and load immediately
        className="object-cover"
      />
      {/* Overlay Logic:
        1. bg-[#F9FBF8]/95 creates a 95% opaque layer of your cream color, keeping text readable.
        2. backdrop-blur-sm softens the image details, making it a subtle texture.
      */}
      <div className="absolute inset-0 bg-[#F9FBF8]/70 backdrop-blur-[2px]"></div>
    </div>

    {/* --- Content (kept relative z-10) --- */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
      {/* Badge/Pill with added backdrop blur for style */}
      <div className="w-fit mx-auto px-4 py-1 border border-gray-900 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-900">
          Pricing Plans
        </p>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
        Simple, Transparent <br />
        <span className="text-[#013228]">Pricing.</span>
      </h1>

      {/* Increased text darkness to text-gray-700 for better contrast on background image */}
      <p className="max-w-2xl mx-auto text-lg text-gray-700 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
        Flexible plans tailored for businesses of all sizes — from startups to
        enterprise. All plans include multi-tenant security and GDPR compliance.
      </p>
    </div>

    {/* Decorative blurs - adjusted slightly to work over the image overlay */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3FFCD]/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E3FFCD]/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
  </section>
);

export default PricingHero;
