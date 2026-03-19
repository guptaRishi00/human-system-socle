"use client";

import React, { useEffect, useRef, useState } from "react";
import { HiOutlineTranslate } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Script from "next/script";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize language from cookie if exists
    const cookies = document.cookie.split("; ");
    const googtrans = cookies.find((row) => row.startsWith("googtrans="));
    if (googtrans) {
      const lang = googtrans.split("/").pop();
      if (lang) {
        setCurrentLang(lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
      }
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr,ar,hi,zh-CN,es,de,pt,it",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // MutationObserver to remove the bar and spinner as soon as they're added
    const observer = new MutationObserver(() => {
      const bar = document.querySelector(".goog-te-banner-frame") as HTMLElement;
      if (bar) {
        bar.style.display = "none";
        bar.style.visibility = "hidden";
      }
      
      // Actively remove the spinner and banners if they appear
      const elementsToRemove = document.querySelectorAll('.goog-te-spinner-pos, [class*="goog-te-spinner"], .goog-te-banner-frame, #goog-gt-tt');
      elementsToRemove.forEach(el => el.remove());

      if (document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
    });

    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const changeLanguage = (langCode: string) => {
    // Set cookie for Google Translate
    // Format: /source/target (e.g., /en/fr)
    const cookieValue = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
    
    // Also try to trigger the combo box if it exists
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      // If select isn't available, reload to apply cookie
      window.location.reload();
    }

    setCurrentLang(langCode);
    document.documentElement.dir = langCode === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = langCode;
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
    { code: "zh-CN", name: "中文", flag: "🇨🇳" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      
      {/* Hidden original Google Translate element */}
      <div id="google_translate_element" style={{ visibility: 'hidden', position: 'absolute', top: '-1000px', left: '-1000px' }}></div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-2 rounded-full text-white transition-all cursor-pointer"
      >
        <span className="text-sm font-medium uppercase">{currentLang}</span>
        <IoIosArrowDown className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-12 ltr:right-0 rtl:left-0 w-32 bg-white rounded-xl shadow-2xl z-[111] overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                currentLang === lang.code ? "text-[#013228] font-bold bg-[#E3FFCD]/20" : "text-gray-600"
              }`}
            >
              <span>{lang.name}</span>
              <span>{lang.flag}</span>
            </button>
          ))}
        </div>
      )}


    </div>
  );
};

export default LanguageSwitcher;

