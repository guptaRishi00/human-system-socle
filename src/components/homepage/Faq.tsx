"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set second item open by default to match screenshot

  const faqContent = [
    {
      title: "Q. What is Human Systems, and how can it benefit my business?",
      content:
        "Human Systems is a comprehensive, cloud-based HR SaaS platform that centralizes employee management, leave tracking, payroll, performance reviews, document management, and more. It helps businesses streamline HR operations, reduce admin overhead, and ensure compliance with data protection regulations.",
    },
    {
      title: "Q. How do I get started with Human Systems?",
      content:
        "Getting started is easy — simply choose a plan that fits your team size, and our onboarding team will guide you through the setup. You can import existing employee data, configure leave policies, and customize workflows. Your team will be up and running within days.",
    },
    {
      title:
        "Q. Can I customize Human Systems to match my company's HR processes?",
      content:
        "Absolutely. Human Systems supports customizable employee profile fields, leave policies, approval workflows, onboarding/offboarding checklists, expense categories, and email templates. The Admin Module gives your HR team full control to tailor the platform to your needs.",
    },
    {
      title: "Q. How secure is our HR data on Human Systems?",
      content:
        "Security is a top priority. Human Systems uses data encryption at rest and in transit, role-based access controls (RBAC), multi-tenant isolation, and regular automated backups. The platform is fully GDPR-compliant and deployed on enterprise-grade infrastructure.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-white overflow-hidden">
      {/* Subtle background question marks (Watermarks) */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* --- Left Column: Header --- */}
        <div className="flex flex-col items-start space-y-6">
          <div className="w-fit px-4 py-1 border border-gray-900 rounded-full">
            <p className="text-lg">FAQ's</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            Find answers to the most common questions about Human Systems'
            features, security, and getting started with the platform.
          </p>
        </div>

        {/* --- Right Column: Accordion --- */}
        <div className="space-y-4">
          {faqContent.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 ${isOpen ? "bg-[#f3f4f6]" : "bg-[#f3f4f6]"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-[#04231d] pr-4">
                    {faq.title}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isOpen ? "bg-[#04231d] border-[#04231d] text-white" : "border-gray-300 text-gray-500"}`}
                  >
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-8 text-gray-500 leading-relaxed text-base">
                    {faq.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
