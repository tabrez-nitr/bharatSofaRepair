'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can use any icon library like lucide, heroicons, etc.
import { div } from 'framer-motion/client';
import { useScroll , motion } from "framer-motion"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const { scrollYProgress } = useScroll()

  const toggleMenu = () => setIsOpen(!isOpen);

  return (


    <div>

       <motion.div  className="bg-[#f8d493] z-25  w-full h-[10px]  origin-left fixed top-17 md:top-16 left-0"
        style={{
          scaleX : scrollYProgress
        }}></motion.div>

        {/* NavBar for medium devices  */}
        <div className=' relative z-50'>
          <div className='w-full px-10  h-17 hidden md:block fixed top-0 bg-[#2C2C2C] text-[#F5DEB3] text-[18px] p-3'>
            <div className='flex justify-between'>
              <div>
              <div className="text-xl  font-bold"><i className="ri-sofa-fill"></i>Bharat Sofa Repair<br /><p className='text-[10px] font-normal text-white/80'> Sector-110, Maharishi Aashram, Noida</p></div>
              </div>
            <ul className='flex gap-5 items-center px-10'>
             <a href="#home" className="hover:text-[#D4AF37] ">Home</a>
             <a href="#services" className="hover:text-[#D4AF37]">Services</a>
             <a href="#about" className="hover:text-[#D4AF37]">About</a> 
             <a href="#contact" className="hover:text-[#D4AF37]">Contact</a>
            </ul>
            </div>
          </div>

        </div>

      {/* NavBar for Mobile Phones  */}
      <div className='relative z-50'>
    <div className=" md:hidden fixed top-0 w-full bg-[#2C2C2C] text-[#F5DEB3] px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold  "><i className="ri-sofa-fill"></i>Bharat <span className='playwrite-in-cursive'>Sofa</span><br /><p className='text-[10px] font-normal  text-white/80'> Sector-110, Maharishi Aashram, Noida</p></div>
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
          <button type='button' onClick={toggleMenu}> <a href="#home" className="hover:text-[#D4AF37] ">Home</a></button>
          <button type='button' onClick={toggleMenu}><a href="#services" className="hover:text-red-400">Services</a></button>
          <button type='button' onClick={toggleMenu}> <a href="#about" className="hover:text-red-400">About</a></button> 
          <button type='button' onClick={toggleMenu}> <a href="#contact" className="hover:text-red-400">Contact</a></button>
        </motion.div>
      )}
    </div>
     </div>
     </div>
  );
}

export default Navbar;