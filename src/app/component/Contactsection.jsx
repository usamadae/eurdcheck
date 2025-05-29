'use client';
import React from 'react';

const ContactSection = () => {
  return (
    <>
      {/* Background Header Section */}
      <section
        className="py-16 px-4 w-full  md:h-[500px] bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/images/contact.png')" }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold font-Prototype text-[#353535] mb-7">
          CONTACT US
        </h2>
        <p className="text-base md:text-lg lg:text-[16px] font-normal text-[#353535] max-w-3xl mx-auto md:leading-8">
          EUDRchecks is a new product: Please write to us to let us know what you think about it, or to request additional product features.
        </p>
      </section>

      {/* Contact Card Section */}
      <section className="relative    sm:-mt-0    md:-mt-48 w-full flex justify-center px-4">
        <div className="bg-white rounded-[20px] shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 overflow-hidden p-3">
          {/* Left Contact Info */}
          <div className="bg-[#2E5339] text-white p-10 md:col-span-2 flex flex-col justify-center md:rounded-[30px]">
            <h3 className="text-3xl font-bold mb-6  lg:text-[50px] ">Contact Information</h3>
            <div className="space-y-4 text-sm leading-relaxed">
              <p  className="flex gap-[10] items-center " > 
                {/* <strong>Email:</strong><br /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 37" fill="none">
<path d="M18 36.0601C27.9411 36.0601 36 28.0012 36 18.0601C36 8.11893 27.9411 0.0600586 18 0.0600586C8.05887 0.0600586 0 8.11893 0 18.0601C0 28.0012 8.05887 36.0601 18 36.0601Z" fill="white"/>
<path d="M25.8802 12.51V22.676C25.8802 22.8495 25.8527 23.0241 25.789 23.1859C25.7262 23.3457 25.635 23.485 25.4369 23.5487C25.436 23.5487 25.435 23.5497 25.434 23.5497C25.23 23.6144 25.0163 23.6409 24.8025 23.6409H10.8985C10.2552 23.3938 10.1209 23.1957 10.1199 22.4857C10.1189 19.286 10.1189 16.0853 10.1199 12.8856C10.1199 12.1619 10.4749 11.804 11.2034 11.804C15.7358 11.802 20.2682 11.805 24.8005 11.8001C25.331 11.7991 25.736 11.9462 25.8802 12.51ZM11.7104 12.6591C11.7712 12.7356 11.8026 12.7836 11.8418 12.8228C13.5873 14.5634 15.3328 16.304 17.0802 18.0416C17.19 18.1514 17.3813 18.3181 17.5058 18.4113C17.9382 18.7349 18.1079 18.7163 18.5727 18.3417C18.7355 18.2103 18.8904 18.07 19.0395 17.923C20.7212 16.252 22.401 14.5781 24.0798 12.9042C24.1465 12.8385 24.2053 12.765 24.2994 12.6591H11.7104ZM20.1123 18.5103C19.5102 19.0899 18.9777 19.7488 18.0147 19.7587C17.0351 19.7675 16.4958 19.0987 15.9349 18.5584L11.8918 22.6426H24.1994C22.8472 21.2756 21.4978 19.9106 20.1123 18.5103ZM15.0553 17.8308L11.0407 13.6652V21.9052C12.44 20.4853 13.7971 19.1085 15.0553 17.8308ZM20.8977 17.7847L24.9486 21.8964V13.6769C24.9153 13.6632 24.9123 13.6622 24.879 13.6485C23.5601 15.0194 22.2402 16.3893 20.8977 17.7847Z" fill="#2E5339"/>
</svg>
                <a href="mailto:EUDRchecks@tradeinspace.com" className="text-white">EUDRchecks@tradeinspace.com</a>
              </p>
              <p className="flex gap-[10] items-center">
                {/* <strong>Address:</strong><br /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 36 37" fill="none">
<path d="M18 36.1802C27.9411 36.1802 36 28.1213 36 18.1802C36 8.23905 27.9411 0.180176 18 0.180176C8.05887 0.180176 0 8.23905 0 18.1802C0 28.1213 8.05887 36.1802 18 36.1802Z" fill="white"/>
<path d="M18 11.1802C15.2427 11.1802 13 13.5296 13 16.4161C13 17.2191 13.1697 17.9903 13.5052 18.7119C13.9678 19.6837 15.3213 22.0798 16.7545 24.6168L17.4521 25.8526C17.5668 26.0551 17.7754 26.1802 18 26.1802C18.2246 26.1802 18.4341 26.0561 18.5479 25.8526L19.2455 24.6168C20.6692 22.0977 22.0133 19.7174 22.4844 18.7318C22.4891 18.7239 22.4938 18.7149 22.4976 18.706C22.8303 17.9883 23 17.2181 23 16.4151C23 13.5296 20.7573 11.1802 18 11.1802ZM18 18.7933C16.6512 18.7933 15.5536 17.6449 15.5536 16.2325C15.5536 14.82 16.6512 13.6706 18 13.6706C19.3488 13.6706 20.4455 14.819 20.4455 16.2325C20.4455 17.6449 19.3488 18.7933 18 18.7933Z" fill="#2E5339"/>
</svg>
                Trade in Space, The Standard Buildings,<br />
                94 Hope Street, Glasgow, G2 6PH, UK.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 md:col-span-3 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <label className='text-[#353535] md:text-[18px] font-medium'>Your Name</label>
                <input type="text" placeholder="Robin Sampson" className="border-b outline-none py-2" />

                </div>
                <div>

                <label className='text-[#353535] md:text-[18px] font-medium'>Your Email</label><br></br>
                <input type="email" placeholder="Robin@gmail.com" className="border-b outline-none py-2" />
                </div>
              </div>
               <label className='text-[#353535] md:text-[18px] font-medium'>Your Subject</label>
              <input type="text" placeholder="Lorem Ipsum is simply dummy" className="border-b outline-none w-full py-2" />
               <label className='text-[#353535] md:text-[18px] font-medium'>Message</label>
              <textarea placeholder="Write here your message" className="border-b outline-none w-full py-2 resize-none h-32" />
              <button type="submit" className="bg-[#353535] text-white py-2 px-6 rounded-full hover:bg-[#24462f] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
