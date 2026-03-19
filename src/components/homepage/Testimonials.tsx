"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

interface Testimonial {
  img: string;
  role: string;
  name: string;
  company: string;
  content: string;
}

export default function InfiniteTestimonials() {
  const testimonials: Testimonial[] = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      role: "Directrice chez Esprit Famille",
      name: "Leila Mely",
      company: "Esprit Famille",
      content: "The interface is so intuitive that our employees didn't even need training. Best HR software we've used.",
    },
     {
      img: "https://media.licdn.com/dms/image/v2/D4D03AQGKXDSiuNsfWA/profile-displayphoto-scale_400_400/B4DZpqVpfKIkAk-/0/1762720653795?e=1775692800&v=beta&t=8ulxiyfGsvlmAcdcc9MdupfS5QkThayYRXf6Oswk_08",
      role: "Directeur commercial chez",
      name: "Jean Paul DZIME BIBANG",
      company: "ONEDISTRIB partenaire Alliance des énergies",
      content: "The employee self-service portal has dramatically reduced our HR team's workload. Highly recommended.",
    },
     {
      img: "https://media.licdn.com/dms/image/v2/C4E03AQFTO3FFKbrYWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516857773658?e=1775692800&v=beta&t=bFRdO7hWewhoNDkVgtJAbt-WdWh_jpRJKEfQmLqGI60",
      role: "Dirigeante chez Excellentia Formation ",
      name: " Essi AYIVOR",
      company: "Creative Pulse",
      content: "The interface is so intuitive that our employees didn't even need training. Best HR software we've used.",
    },
     {
      img: "https://media.licdn.com/dms/image/v2/D4E03AQHB58_fRta2uw/profile-displayphoto-shrink_400_400/B4EZkLvnzvIsAk-/0/1756838657783?e=1775692800&v=beta&t=Jz-i9obYGww8nHTriWkxkK-7d0BhgGD_oarVTTlvn5c",
      role: "chef d’entreprise",
      name: "Dominique SARR EXAPAYE",
      company: "EXAPAYE",
      content: "The interface is so intuitive that our employees didn't even need training. Best HR software we've used.",
    },
    {
      img: "https://media.licdn.com/dms/image/v2/D4E03AQG4hOK0_aNyjQ/profile-displayphoto-shrink_400_400/B4EZRzewgrGgAk-/0/1737104231875?e=1775692800&v=beta&t=mtkkApQ-bbmYHJhBu935_ih8GLGNuoyrJHjCFE_lrx0",
      role: "Présidente fondatrice de l'IDRECOM",
      name: "Narcise THÉRÈSE",
      company: "IDRECOM",
      content: "Human Systems has completely transformed how we manage our HR operations. The leave management is seamless.",
    },
   
    {
      img: "https://media.licdn.com/dms/image/v2/C4D03AQEf8BRCvOlg_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1544133046397?e=1775692800&v=beta&t=cGduHRo9PnDv7NV5gPDDacMjwoPHIwgS72l_JES0mQ8",
      role: "Responsable Travaux Comptable et Fiscale",
      name: "Kévin M",
      company: "LA BOUSSOLE ",
      content: "Payroll automation used to be a nightmare. Now it's a single click. A game changer for our finance team.",
    },
   
    
     
    
  
  ];

  // Triple the array to ensure we always have content to show during the jump
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const checkRTL = () => {
      setIsRTL(document.documentElement.dir === "rtl");
    };
    checkRTL();
    const observer = new MutationObserver(checkRTL);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
    return () => observer.disconnect();
  }, []);

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
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevStep = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextStep, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, isTransitioning]);

  // The Magic: Seamless Teleport Logic
  const handleUpdate = () => {
    // If we've slid past the end of the middle set
    if (currentIndex >= testimonials.length * 2) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length);
    }
    // If we've slid before the start of the middle set
    else if (currentIndex < testimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex(testimonials.length * 2 - 1);
    }
  };

  // Re-enable transitions after the "jump" has happened in state
  useEffect(() => {
    if (!isTransitioning) {
      // Smallest possible delay to let the jump happen before re-enabling animation
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  return (
    <section className="py-24 px-6 bg-[#F9FBF8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#013228]">What our clients say</h2>
            <p className="text-gray-500 mt-2">Trusted by leading HR teams worldwide.</p>
          </div>

          <div className="flex items-center bg-white rounded-full p-1 border border-gray-100 shadow-sm">
            <button onClick={prevStep} className="p-3 rounded-full hover:bg-gray-50 text-gray-500 transition-all active:scale-90">
              {isRTL ? <HiOutlineArrowRight size={20} /> : <HiOutlineArrowLeft size={20} />}
            </button>
            <button onClick={nextStep} className="p-3 rounded-full hover:bg-gray-50 text-gray-500 transition-all active:scale-90">
              {isRTL ? <HiOutlineArrowLeft size={20} /> : <HiOutlineArrowRight size={20} />}
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
            animate={{ x: `${isRTL ? "" : "-"}${currentIndex * (100 / visibleCards)}%` }}
            onAnimationComplete={handleUpdate}
            transition={
              isTransitioning
                ? { duration: 0.7, ease: [0.32, 0.72, 0, 1] }
                : { duration: 0 } // This makes the jump invisible
            }
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
                      {item.role} <span className="text-gray-300 mx-1">|</span> {item.company}
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
