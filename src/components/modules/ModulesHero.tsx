import React from "react";
import Image from "next/image";

const ModulesHero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden rounded-b-[50px] min-h-[600px] flex items-center">
    {/* --- Background Image Wrapper --- */}
    <div className="absolute inset-0 z-0">
      <Image
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" // High-quality workspace image
        alt="Platform Modules Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#F9FBF8]/70 backdrop-blur-[2px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
      <div className="w-fit mx-auto px-4 py-1 border border-gray-900 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 backdrop-blur-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-900">
          Platform Modules
        </p>
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
        Everything You Need <br />
        <span className="text-[#013228]">In One Platform.</span>
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-gray-700 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000">
        From Core HR to Payroll — 9 powerful modules designed to streamline
        every aspect of your human resource operations with enterprise-grade
        security and multi-tenant architecture.
      </p>
    </div>

    {/* Decorative blurs - increased opacity slightly to pop over the image */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#E3FFCD]/40 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E3FFCD]/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
  </section>
);

export default ModulesHero;
