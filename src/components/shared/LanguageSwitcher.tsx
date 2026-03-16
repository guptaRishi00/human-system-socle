"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    // Initialize language from cookie if exists
    const cookies = document.cookie.split("; ");
    const googtrans = cookies.find((row) => row.startsWith("googtrans="));
    if (googtrans) {
      const lang = googtrans.split("/").pop();
      if (lang) setCurrentLang(lang);
    }

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,fr",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
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
    setIsOpen(false);
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  return (
    <div className="relative">
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      
      {/* Hidden original Google Translate element - NOT hidden with display:none to ensure initialization */}
      <div id="google_translate_element" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, width: 0 }}></div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-2 rounded-full text-white transition-all cursor-pointer"
      >
        <HiOutlineTranslate className="text-lg" />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
        <IoIosArrowDown className={`text-xs transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-[110]" 
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute top-12 right-0 w-32 bg-white rounded-xl shadow-2xl z-[111] overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
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
        </>
      )}

      <style jsx global>{`
        .goog-te-banner-frame, 
        .goog-te-banner,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-logo-link {
          display: none !important;
        }
        .trans-section {
          display: none !important;
        }
        .goog-te-gadget {
          font-size: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;

