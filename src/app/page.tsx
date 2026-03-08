import EmployeeSelfService from "@/components/homepage/EmployeeSelfService";
import Faq from "@/components/homepage/Faq";
import HeroSection from "@/components/homepage/HeroSection";
import OurModules from "@/components/homepage/OurModules";
import PlatformBenefits from "@/components/homepage/PlatformBenefits";
import Pricing from "@/components/homepage/Pricing";
import Testimonials from "@/components/homepage/Testimonials";
import RecentBlogs from "@/components/homepage/RecentBlogs";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurModules />
      <EmployeeSelfService />
      <Testimonials />
      <PlatformBenefits />
      <Pricing />
      <Faq />
      <RecentBlogs />
    </div>
  );
}
