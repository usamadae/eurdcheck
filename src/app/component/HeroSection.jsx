'use client';
import { useState } from 'react';

const HeroSection = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <section
      className="text-center w-full py-12 bg-cover bg-center px-4    md:rounded-bl-[60px] md:rounded-br-[60px]"
      style={{ backgroundImage: "url('/images/herosection.png')" }}
    >
      <div className="w-full max-w-5xl mx-auto space-y-8">
        <h1 className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-relaxed font-Prototype">
          EUDRChecks makes it easy to prepare your shipment,<br className="hidden sm:block" />
          co-operative, or supply chain for the European Union’s<br className="hidden sm:block" />
          <span className="text-white font-bold">
            zero-deforestation import regulations.
          </span>
        </h1>

        <p className="text-white font-normal text-base sm:text-lg md:text-xl leading-7 md:leading-11">
          Simply drag and drop your geolocation data to receive a comprehensive deforestation-free report,<br className="hidden md:block" />
          detailed risk assessment, and tailored recommendations. EUDR due diligence has never been easier.
        </p>

        <h2 className="text-white font-bold text-xl sm:text-2xl">
          UPLOAD GEOLOCATIONS
        </h2>

        {/* File Upload Field */}
        <div className="relative border-2 border-dashed border-white md:rounded-[20px] p-4 sm:p-8 bg-[#a5a2a2ad] max-w-md mx-auto">
          <input
            type="file"
            id="file-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
          />
          <div className="text-white opacity-90 pointer-events-none">
            <svg  className='mx-auto mb-2' xmlns="http://www.w3.org/2000/svg" width="69" height="49" viewBox="0 0 69 49" fill="none">
<path d="M68.2239 33.7429C67.5699 48.6 55.2546 49 50.9199 49H38.6509V36.1143C38.6509 35.24 39.3685 34.5314 40.2539 34.5314H43.3849C43.8247 34.5314 44.2298 34.3543 44.5192 34.0686C44.8085 33.7829 44.9879 33.3829 44.9879 32.9486C44.9879 32.6057 44.8722 32.2743 44.6638 32L35.5199 19.96C34.8718 19.1143 33.5812 19.12 32.9446 19.9771L24.0032 32.0057C23.8007 32.2743 23.6965 32.6057 23.6965 32.9429V32.9486C23.6965 33.8229 24.4083 34.5314 25.2938 34.5314H28.199C29.0787 34.5314 29.7963 35.24 29.7963 36.1143V49H11.902C7.32426 49 0.454751 42.2171 0.229047 34.5314C-0.00244455 26.8457 7.26639 22.8914 7.26639 22.8914C5.66331 7.91429 20.0852 11.1886 20.0852 11.1886C20.0852 11.1886 22.2034 0 37.6612 0C53.1133 0 54.0855 17.8571 54.0855 17.8571C54.0855 17.8571 68.9126 18.0286 68.2239 33.7429Z" fill="white"/>
</svg>
            <p className="mt-2 text-sm sm:text-[12px] font-normal">
              {fileName ? fileName : 'Drag & Drop or Click to Upload Files'}
            </p>
          </div>
          
        </div>

        <div className="mt-6">
          <button className="bg-white text-[#2E5339] font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition text-sm sm:text-base">
            REVOLUT PAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
