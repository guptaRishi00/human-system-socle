import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SharedCta = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto bg-[#E3FFCD] rounded-[40px] p-12 lg:p-20 text-center relative overflow-hidden group">
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" // Replace with your image
          alt="Team Collaboration"
          fill
          className="object-cover opacity-40 grayscale group-hover:scale-105 transition-transform duration-700"
        />
        {/* Subtle gradient to ensure the center text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3FFCD]/70 via-transparent to-[#E3FFCD]/70" />
      </div>

      {/* --- Content --- */}
      <div className="relative z-10">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#013228] mb-8 leading-tight">
          Ready to humanize your <br /> HR operations?
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <button className="group/btn w-full cursor-pointer sm:w-auto bg-[#013228] text-[#E3FFCD] px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#013228]/20 transition-all flex items-center justify-center gap-2">
              Get Started Now
              <ArrowRight
                size={20}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </Link>

          <Link href="/contact">
            <button className="w-full cursor-pointer sm:w-auto border-2 border-[#013228] text-[#013228] px-10 py-4 rounded-2xl font-bold text-lg hover:bg-[#013228] hover:text-[#E3FFCD] transition-all bg-white/20 backdrop-blur-sm">
              Contact Sales
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative shapes (kept them but lowered opacity so they don't fight the image) */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#013228]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#013228]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    </div>
  </section>
);

export default SharedCta;
