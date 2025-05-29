'use client'; // needed only if you're using client-side interactivity

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-[#353535] shadow-md px-6 py-4 flex items-center justify-between">
      <Link href="/" className='m-auto block'>
        <div className="flex items-center justify-center  m-auto   ">
          <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
          {/* <span className="ml-2 text-xl font-bold">MyApp</span> */}
        </div>
      </Link>
      {/* <div className="space-x-6">
        <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
        <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
