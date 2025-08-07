import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // You can use any icon library like lucide, heroicons, etc.
import { div } from 'framer-motion/client';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (


    <div>



      {/* NavBar for Mobile Phones  */}
      <div className='relative z-50'>
    <div className=" md:hidden fixed top-0 w-full bg-[#2C2C2C] text-[#F5DEB3] px-6 py-4 flex justify-between items-center">
      <div className="text-xl  font-bold"><i className="ri-sofa-fill"></i>Bharat</div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute top-16 left-0 w-full bg-[#2C2C2C] text-[#F5DEB3] flex flex-col items-center space-y-4 py-6 z-50"
        >
          <a href="#home" className="hover:text-[#D4AF37] ">Home</a>
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#services" className="hover:text-red-400">Services</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </motion.div>
      )}
    </div>
     </div>
     </div>
  );
}

export default Navbar;