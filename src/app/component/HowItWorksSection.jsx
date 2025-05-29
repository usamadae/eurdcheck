'use client';

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-[65px] font-bold font-Prototype text-gray-800 mb-10">
          How it Works
        </h2>
        
          <img
            src="/images/howitsworks.png"
            alt="EUDRChecks by Trade in Space"
            className="w-full md:w-full"
          />

        {/* Steps Diagram */}
        

        {/* Logo (optional based on your image) */}
        {/* <div className="mt-12 flex justify-center">
          <img
            src="/images/logo.png"
            alt="EUDRChecks by Trade in Space"
            className="w-32 md:w-40"
          />
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
