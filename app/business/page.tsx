import { BusinessHeader } from "@/components/business/BusinessHeader";
import { BusinessHero } from "@/components/business/BusinessHero";
import { AboutMe } from "@/components/business/AboutMe";
import { WhyMe } from "@/components/business/WhyMe";
import { Services } from "@/components/business/Services";
import { CaseStudies } from "@/components/business/CaseStudies";
import { BusinessContact } from "@/components/business/BusinessContact";

export default function BusinessPage() {
  return (
    <>
      <BusinessHeader />
      <main className="min-h-screen bg-background">
        <BusinessHero />
        <AboutMe />
        <WhyMe />
        <Services />
        <CaseStudies />
        <BusinessContact />
      </main>
    </>
  );
}
