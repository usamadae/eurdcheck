'use client'; // ✅ Required for useState and interactive features

import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is EUDRChecks?',
    answer:
      'EUDRChecks is a tool provided by Trade in Space for analyzing geolocation data to ensure compliance with deforestation regulations like EU TRACES and EUDR.',
  },
  {
    question: 'What checks are carried out on my geolocation data?',
    answer:
      'We begin with data quality checks. Your geolocation information is assessed to ensure it meets the format requirements of the EU TRACES system and the EUDR legislation. This includes verifying that coordinates have the required 6 decimal places, and that polygons are correctly formed, without holes or self-intersections. We go further by evaluating the overall quality of the geolocation data—checking polygon size, complexity, and other factors. If a location is technically acceptable but doesn’t meet a high-quality threshold, we’ll flag this and provide recommended next steps.',
  },
  {
    question: 'What information will I receive?',
    answer:
      'You will receive a ready-to-share file containing your compliance status and any flagged issues related to your geolocation data.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing depends on the volume of data. Please contact Trade in Space for a custom quote.',
  },
  {
    question: 'What happens if the report shows deforestation risk?',
    answer:
      'We will provide clear steps and recommendations on how to address any deforestation risks detected in the report.',
  },
  {
    question: 'What information do I need provide in order to receive a deforestation assessment?',
    answer:
      'You’ll need to upload geolocation files in a supported format with accurate coordinates and polygon shapes.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second question open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" py-16 px-4 w-[98%] mx-auto lg:my-[50px]   md:rounded-[25px]"   style={{ backgroundImage: "url('/images/faqsbackgorund.png')", backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'  }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-white">
        {/* Left Title */}
        <div className="md:col-span-1   flex items-start justify-center md:justify-center  md:w-[300px]">
          <h2 className="text-4xl md:text-5xl  lg:text-[60px] font-bold font-Prototype text-[#2E5339] leading-tight">
            Frequently<br />Asked<br />Questions
          </h2>
        </div>

        {/* Right FAQ list */}
        <div className="md:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black/30 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-semibold text-black focus:outline-none"
              >
                {faq.question}
                <span className="text-2xl lg:text-[24px]  text-[#2E5339] transition-transform duration-500">
                  {openIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" viewBox="0 0 26 14" fill="none">
<path d="M12.9586 3.0474C11.9132 3.97047 10.8824 4.88017 9.85223 5.78988C7.24882 8.089 4.64594 10.3881 2.04253 12.6867C1.60582 13.0723 1.12334 13.1097 0.646643 12.8022C0.151005 12.4824 -0.117859 11.8685 0.0499841 11.3593C0.111017 11.1748 0.227823 10.9839 0.370938 10.8571C4.32972 7.3499 8.29482 3.84961 12.2604 0.349847C12.6998 -0.0378859 13.2891 -0.0132858 13.7637 0.407605C16.0651 2.44895 18.3633 4.49351 20.6652 6.53432C22.2947 7.97883 23.9274 9.41852 25.559 10.8609C26.0188 11.2673 26.1199 11.754 25.8584 12.2936C25.5874 12.8525 25.0002 13.183 24.4598 13.0424C24.2746 12.9942 24.0926 12.8734 23.9453 12.7434C20.3416 9.56613 16.7433 6.38351 13.1433 3.20196C13.0902 3.15596 13.036 3.11211 12.9586 3.0474Z" fill="#2E5339"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" viewBox="0 0 26 14" fill="none">
<path d="M13.0414 10.102C14.0868 9.17894 15.1176 8.26924 16.1478 7.35954C18.7512 5.06041 21.3541 2.76129 23.9575 0.462701C24.3942 0.0771073 24.8767 0.039671 25.3534 0.347183C25.849 0.666996 26.1179 1.28095 25.95 1.79009C25.889 1.97459 25.7722 2.16552 25.6291 2.29227C21.6703 5.79951 17.7052 9.29981 13.7396 12.7996C13.3002 13.1873 12.7109 13.1627 12.2363 12.7418C9.93495 10.7005 7.63671 8.6559 5.33478 6.61509C3.70528 5.17058 2.07263 3.73089 0.441026 2.28852C-0.0188326 1.88207 -0.119854 1.3954 0.141644 0.855782C0.412614 0.296912 0.999801 -0.0335972 1.54016 0.107056C1.72537 0.155189 1.90742 0.276055 2.05474 0.406012C5.65837 3.58328 9.25673 6.7659 12.8567 9.94746C12.9098 9.99345 12.964 10.0373 13.0414 10.102Z" fill="#2E5339"/>
</svg>}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-black leading-relaxed lg:text-[14px]  text-[#2E5339] md:leading-8">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
