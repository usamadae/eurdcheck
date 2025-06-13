'use client';
import React,{useState} from "react";
import Image from "next/image";
import HeroSection from './component/HeroSection';
import HowItWorksSection from "./component/HowItWorksSection";
import FAQSection from "./component/FAQSection";
import ContactSection from "./component/Contactsection";
import FooterSection from "./component/FooterSection";

export default function Home() {
  const [fileUrl, setFileUrl] = useState(null);
  return (
    <div className="grid   gap-16  font-[family-name:var(--font-geist-sans)]">
      <main className="">
         <HeroSection setFileUrl={setFileUrl} />
         <HowItWorksSection />
         <FAQSection/>
         <ContactSection  fileUrl={fileUrl}/>
         
         <FooterSection />
      </main>
      
    </div>
  );
}
