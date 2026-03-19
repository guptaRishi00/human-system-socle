import Link from "next/link";
import React from "react";
import {
  HiOutlineUserGroup,
  HiOutlineCalendar,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineClipboardList,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

export default function OurModules() {
  const modules = [
    {
      title: "Core HR & Employee Admin",
      description:
        "Centralized employee profiles, contract management with versioning, automated probation alerts, and customizable onboarding & offboarding checklists.",
      icon: <HiOutlineUserGroup size={32} />,
    },
    {
      title: "Leave & Absence Management",
      description:
        "Customizable leave policies, automated accruals, multi-step approval workflows, shared team calendars, and real-time leave balance reporting.",
      icon: <HiOutlineCalendar size={32} />,
    },
    {
      title: "Document Management (HR Vault)",
      description:
        "Secure, permission-based document repository with categorization, role-based access control, and automated expiration alerts for work permits and certifications.",
      icon: <HiOutlineShieldCheck size={32} />,
    },
    {
      title: "Performance Management",
      description:
        "Goal setting & tracking with OKRs/KPIs, cascading goals from company to individual, performance review cycles, and self-assessment forms.",
      icon: <HiOutlineChartBar size={32} />,
    },
    {
      title: "Payroll Management",
      description:
        "Automated payroll runs with salary structure configuration, tax and deduction management, payslip generation, distribution, and compliance reporting.",
      icon: <HiOutlineCurrencyDollar size={32} />,
    },
    {
      title: "Expense Management",
      description:
        "Streamlined expense claim submission with digital receipt upload, customizable expense categories, and multi-level approval workflows with analytics.",
      icon: <HiOutlineClipboardList size={32} />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#FCFDFB]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-fit px-6 py-1.5 border border-gray-900 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest">
              Our Modules
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive HR Modules
          </h2>
          <p className="max-w-2xl text-gray-500 text-lg leading-relaxed">
            Human Systems provides a complete suite of HR modules built with
            multi-tenant architecture, robust security, and role-based access
            controls.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            /* Replaced outer div with Link */
            <Link
              href="/modules"
              key={index}
              className="group relative bg-white border border-gray-300 p-10 rounded-[40px] 
                         transition-all hover:border-[#013228] cursor-pointer flex flex-col h-full"
            >
              {/* Icon */}
              <div className="text-gray-900 mb-8 transition-all duration-500 transform group-hover:scale-110 origin-left">
                {module.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-500">
                {module.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 mb-10 leading-relaxed transition-colors duration-500 flex-grow">
                {module.description}
              </p>

              {/* The "Read More" Full Button Transformation (Removed inner Link) */}
              <div
                className="w-fit inline-flex items-center gap-3 px-0 py-2 rounded-full transition-all duration-500 ease-in-out
                           group-hover:bg-[#013228] group-hover:px-6 group-hover:py-3 mt-auto"
              >
                <span className="text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-white transition-colors duration-500">
                  Read More
                </span>

                <HiOutlineArrowNarrowRight
                  size={20}
                  className="text-gray-900 group-hover:text-white transition-all duration-500 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
