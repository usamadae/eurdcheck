'use client';
import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const FooterSection = () => {
  return (
    <footer className="bg-[#f2efe4] text-[#2e5339] pt-16 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Left: Logo and Description */}
        <div  className='md:col-span-3'>
          <div className="  flex flex-col items-start gap-4 mb-6">
            <img src="/images/footer.png" alt="Logo" className="md:w-24 md:h-24" />
            <p className="text-sm leading-8  md:text-[14px] text-[#353535]  " >
              EUDRchecks is a new product from Trade in Space, designed to make<br></br>
              EUDR compliance more manageable for producers, small traders and<br></br>
              importers, and for those who need to prove 1-off shipments.
              <br></br>
              Please reach out to the team using the contact form on this website if<br></br>
              you would like to request custom analysis.
            </p>
          </div>
          
        </div>

        {/* Center: Quick Links */}
        <div className='md:col-span-1'>
          <h3 className="text-xl font-bold mb-4 md:text-[32px]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[#353535] md:text-[14px] leading-7 font-medium">
            <li>• Home</li>
            <li>• About us</li>
            <li>• Upload</li>
            <li>• FAQ</li>
            <li>• Contact us</li>
          </ul>
        </div>

        {/* Right: Follow Us */}
        <div className='md:col-span-1'>
          <h3 className="text-xl font-bold mb-4 md:text-[32px]">Follow us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="Facebook" className="   text-[#F2EFE6]  bg-[#353535] p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" aria-label="X Twitter" className=" text-[#F2EFE6]  bg-[#353535] p-2 rounded-full"><FaXTwitter /></a>
            <a href="#" aria-label="Instagram" className=" text-[#F2EFE6]  bg-[#353535] p-2 rounded-full"><FaInstagram /></a>
          </div>
        </div>
        <h2 className="text-5xl font-bold opacity-30 lg:text-[200px] text-center">EUDRchecks</h2>
        {/* <div>
            <img src={{backgroundImage:url('/images/eudrcheck.png')}}/>
        </div> */}

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#ccc] pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#353535]">
        <div className='lg:w-[80%] mx-auto flex  sm:flex-col  md:flex-row md:flex-row justify-between items-center'>
        <p  className='text-[#353535] md:text-[16px]'>EUDRcheck ©2025</p>
        <div className="flex  sm:flex-col  md:flex-row  justify-center items-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline text-[#353535] md:text-[16px]">Privacy policy</a>
          <a href="#" className="hover:underline text-[#353535] md:text-[16px]">Verify privacy statement</a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
