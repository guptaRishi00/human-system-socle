import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSection() {
  const bgImage = "/hero-bg-3.svg";

  return (
    <div
      className="relative w-full min-h-[85vh] md:min-h-screen rounded-t-[30px] md:rounded-t-[50px] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-[85rem] mx-auto px-6 md:px-8 py-20 md:py-0">
        {/* Left Content */}
        <div className="flex items-start flex-col gap-5 md:gap-8 max-w-full sm:max-w-lg lg:max-w-xl relative z-10">
          <div className="w-fit px-3 md:px-4 py-1 border border-gray-900 rounded-full">
            <p className="text-sm md:text-lg">Streamline Your HR Operations</p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-gray-900">
            The All-in-One HR SaaS Platform
          </h1>

          <p className="text-base md:text-lg text-gray-400 max-w-md lg:max-w-xl">
            Human Systems empowers businesses with a scalable, secure, and
            modular HR platform from employee management and leave tracking to
            payroll, performance reviews, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <Link href="/contact">
              <button className="group cursor-pointer flex items-center justify-center gap-2 bg-[#013228] rounded-full py-3 px-5 text-sm uppercase tracking-wide font-semibold text-[#E3FFCD] w-full sm:w-auto transition-all">
                Request a Demo
                <IoIosArrowRoundForward
                  size={30}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>

            <Link href="/modules">
              <button className="flex group items-center justify-center gap-2 border border-gray-900 rounded-full py-3 px-5 text-sm uppercase tracking-wide font-semibold text-gray-900 hover:bg-[#013228] cursor-pointer hover:text-white hover:border-white w-full sm:w-auto">
                Learn More
                <IoIosArrowRoundForward
                  size={30}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image - hidden below lg */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block rounded-l-2xl overflow-hidden">
        <Image
          src="/dashboard-1.png"
          alt="Hero Illustration"
          width={500}
          height={500}
          className="w-180 h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
