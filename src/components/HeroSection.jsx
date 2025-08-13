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
    <div id='home' className="relative text-black">

      {/* Custom Navigation Buttons */}
      <div className="hero-swiper-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2 
                      cursor-pointer text-[#F5DEB3] bg-black/25 rounded-full
                      w-10 h-10 flex items-center justify-center">
        <ChevronLeft size={24} />
      </div>
      <div className="hero-swiper-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2 
                      cursor-pointer text-[#F5DEB3] bg-black/25 rounded-full
                      w-10 h-10 flex items-center justify-center">
        <ChevronRight size={24} />
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
        className="h-[38rem] w-full"
      >
      <SwiperSlide className="relative h-screen px-7 flex items-center justify-center text-5xl font-bold">
  <Image
    src={sofaPhoto1}
    alt="New sofas built to fit your space & style"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />
  <div className="relative z-10 flex flex-col items-center text-center">
    <h1 className="mt-33 opacity-80 mb-4">
      New <br /> sofas built <br />to fit your space & style
    </h1>
    <p className="text-[12px] text-[white]/85 font-normal">
      Modern designs | Premium comfort | Affordable luxury
    </p>
    <button className="border-1 p-4 text-[15px] mt-10 rounded-2xl text-[#F5DEB3]">
      WhatsApp Chat
    </button>
  </div>
</SwiperSlide>

<SwiperSlide className="relative h-screen p-7 flex items-center justify-center text-5xl font-bold">
  <Image
    src={sofaPhoto11}
    alt="Expert Repairs to Renew Your Sofa"
    fill
    className="object-cover"
    sizes="100vw"
  />
  <div className="relative z-10 flex flex-col items-center text-center">
    <h1 className="mt-30 font-bold opacity-80 mb-3">
      Expert Repairs to Renew Your Sofa
    </h1>
    <p className="text-[12px] text-[white]/85 font-normal">
      Skilled work | fresh fabrics | flawless finishes
    </p>
    <button className="border-1 p-4 text-[15px] mt-8 font-normal rounded-2xl text-[#F5DEB3]">
      Book Re-pair
    </button>
  </div>
</SwiperSlide>

<SwiperSlide className="relative h-screen p-7 flex items-center justify-center text-5xl font-bold">
  <Image
    src={sofaPhoto5}
    alt="Give Your Sofa A Fresh New Look"
    fill
    className="object-cover"
    sizes="100vw"
  />
  <div className="relative z-10 flex flex-col items-center text-center">
    <h1 className="mt-30 opacity-80">
      Give <br /> Your Sofa <br />A Fresh <br />New Look
    </h1>
    <p className="text-[12px] text-white font-normal">
      Premium fabric replacements in styles you’ll love.
    </p>
    <button className="p-4 border-1 text-[15px] mt-7 opacity-90 rounded-2xl text-[#F5DEB3]">
      Change Fabric
    </button>
  </div>
</SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default HeroSection;