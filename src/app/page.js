import Image from "next/image";
import HeroSection from './component/HeroSection';
import HowItWorksSection from "./component/HowItWorksSection";
import FAQSection from "./component/FAQSection";
import ContactSection from "./component/Contactsection";
import FooterSection from "./component/FooterSection";
export default function Home() {
  return (
    <div className="grid   gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="">
         <HeroSection />
         <HowItWorksSection />
         <FAQSection/>
         <ContactSection />
         <FooterSection/>
      </main>
      
    </div>
  );
}
