'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Import images properly
import sofaPhoto1 from "../assets/SofaPhoto-1.jpg";
import sofaPhoto11 from "../assets/SofaPhoto-11.jpg";
import sofaPhoto5 from "../assets/SofaPhoto-5.jpg";

function HeroSection() {
  return (
    <div id='home' className="relative text-white">

      {/* Custom Navigation Buttons */}
      <div className="hero-swiper-prev absolute left-4 top-1/2 z-30 transform -translate-y-1/2 
                      cursor-pointer text-[#F5DEB3] bg-black/25 rounded-full
                      w-10 h-10 flex items-center justify-center">
        <ChevronLeft size={24} />
      </div>
      <div className="hero-swiper-next absolute right-4 top-1/2 z-30 transform -translate-y-1/2 
                      cursor-pointer text-[#F5DEB3] bg-black/25 rounded-full
                      w-10 h-10 flex items-center justify-center">
        <ChevronRight size={24} />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Static Content Overlay */}
   <div className="absolute inset-0 z-20 md:px-30 flex flex-col items-start justify-center text-left p-4">
  <div>
    <h1 className="text-4xl md:text-6xl font-semibold text-white/95 leading-tight  mb-4 drop-shadow-lg">
      From brand <br /> new sofas to  <br />expert  <br />restorations
    </h1>
    <p className="text-sm md:text-lg text-white/95 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
      Crafted for Comfort | Designed to Last | luxury living made affordable.
    </p>
      <a href="https://wa.me/918130202786?text=Hi%2C%20I%20need%20a%20sofa%20repair%20service" 
          target="_blank" rel="noopener noreferrer">
    <button className="border px-6 py-3 mt-8 rounded-2xl text-[#F5DEB3] hover:bg-white/10 transition-colors">
      Book Now
    </button></a>
  </div>
</div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: '.hero-swiper-next',
          prevEl: '.hero-swiper-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[38rem] md:h-screen w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={sofaPhoto1}
            alt="Stylish modern sofa in a well-lit room"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={sofaPhoto11}
            alt="Close-up of sofa fabric and stitching"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative h-full w-full">
          <Image
            src={sofaPhoto5}
            alt="Elegant sofa as a centerpiece in a living room"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;