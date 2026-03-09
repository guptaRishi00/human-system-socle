"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

interface Testimonial {
  img: string;
  role: string;
  name: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
    role: "HR Director",
    name: "Sophie Laurent",
    company: "TechFlow Systems",
    content:
      "Human Systems has completely transformed how we manage our HR operations. The leave management is seamless.",
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600",
    role: "Operations Manager",
    name: "Marc Dubois",
    company: "Global Logistics",
    content:
      "The employee self-service portal has dramatically reduced our HR team's workload. Highly recommended.",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    role: "CEO",
    name: "Thomas Wright",
    company: "Innovate Ltd",
    content:
      "Payroll automation used to be a nightmare. Now it's a single click. A game changer for our finance team.",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
    role: "Product Lead",
    name: "Elena Rodriguez",
    company: "Creative Pulse",
    content:
      "The interface is so intuitive that our employees didn't even need training. Best HR software we've used.",
  },
];

// Create a loop-friendly array by padding the start and end
const extendedTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function InfiniteTestimonials() {
  // Start at the first element of the middle set
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // FIX: Explicitly type the ref to handle both browser and node environments
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 640) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextStep = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevStep = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Auto-play logic with fix for "clearInterval" type error
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextStep, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Infinite Loop Teleport Logic
  const handleUpdate = () => {
    // If we've reached the end of the middle set + 1
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false); // Disable animation for the "snap"
      setCurrentIndex(testimonials.length);
    }
    // If we've reached the beginning of the middle set - 1
    if (currentIndex < testimonials.length) {
      setIsTransitioning(false); // Disable animation for the "snap"
      setCurrentIndex(testimonials.length * 2 - 1);
    }
  };

  return (
    <section className="py-24 px-6 bg-[#F9FBF8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#013228]">
              What our clients say
            </h2>
            <p className="text-gray-500 mt-2">
              Trusted by leading HR teams worldwide.
            </p>
          </div>

          <div className="flex items-center bg-white rounded-full p-1 border border-gray-100 shadow-sm">
            <button
              onClick={prevStep}
              className="p-3 rounded-full hover:bg-gray-50 text-gray-500 transition-all active:scale-90"
            >
              <HiOutlineArrowLeft size={20} />
            </button>
            <button
              onClick={nextStep}
              className="p-3 rounded-full hover:bg-gray-50 text-gray-500 transition-all active:scale-90"
            >
              <HiOutlineArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="relative -mx-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            initial={false}
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            onAnimationComplete={handleUpdate}
            transition={
              isTransitioning
                ? {
                    duration: 0.7,
                    ease: [0.32, 0.72, 0, 1],
                  }
                : { duration: 0 }
            } // Instant jump
          >
            {extendedTestimonials.map((item, index) => (
              <div
                key={index}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
                className="px-3"
              >
                <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm h-full flex flex-col group hover:border-[#013228]/20 transition-all duration-300">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8 flex-grow">
                    "{item.content}"
                  </p>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-[#013228]">{item.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">
                      {item.role} <span className="text-gray-300 mx-1">|</span>{" "}
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
