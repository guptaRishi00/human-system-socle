import Image from "next/image";
import {
  MdOutlineSecurity,
  MdOutlineAnalytics,
  MdAutoFixHigh,
  MdOutlineLan,
} from "react-icons/md";

const benefits = [
  {
    title: "Secure & GDPR Compliant",
    description:
      "Enterprise-grade data encryption and role-based access ensure your HR data remains protected and compliant.",
    icon: <MdOutlineSecurity size={24} />,
  },
  {
    title: "HR Analytics & Reporting",
    description:
      "Real-time dashboards providing deep insights into headcount, turnover trends, and payroll expenses.",
    icon: <MdOutlineAnalytics size={24} />,
  },
  {
    title: "Workflow Automation",
    description:
      "Eliminate manual overhead by automating approvals, payroll runs, and employee onboarding tasks.",
    icon: <MdAutoFixHigh size={24} />,
  },
  {
    title: "Multi-Tenant Architecture",
    description:
      "Isolated, customizable instances for every client with independent branding and configuration.",
    icon: <MdOutlineLan size={24} />,
  },
];

export default function PlatformBenefits() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left: The Visual (6 Columns) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative group">
              {/* Decorative Background Element */}

              {/* Image Container / Browser Frame */}
              <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <div className="aspect-4/5 relative">
                  <Image
                    src="/2.jpg"
                    alt="Human Systems Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Content (6 Columns) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-12">
            {/* Section Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#013228]" />
                <span className="text-sm font-bold uppercase tracking-widest text-[#013228]">
                  Platform Benefits
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
                Scale your operations with{" "}
                <span className="text-[#013228]">confidence.</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                Built with enterprise-grade security and multi-tenant
                architecture to power your HR operations at any scale.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="group flex flex-col gap-4">
                  {/* Icon: Using #013228 for all icons for a more professional look */}
                  <div className="w-12 h-12 rounded-xl bg-[#013228]/5 flex items-center justify-center text-[#013228] transition-colors group-hover:bg-[#013228] group-hover:text-white">
                    {benefit.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
