import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function HeroSection() {
  return (
    <div className="relative text-black">

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev absolute left-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer !text-[#F5DEB3]">
        <ChevronLeft size={32} />
      </div>
      <div className="swiper-button-next absolute right-4 top-1/2 z-10 transform -translate-y-1/2 cursor-pointer !text-[#F5DEB3]">
        <ChevronRight size={32} />
      </div>

      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[35rem] w-full"
      >
        <SwiperSlide className="bg-[url('src/assets/SofaPhoto-1.jpg')] bg-cover bg-center flex items-center justify-center text-4xl font-bold">
          <h1 className="text-center mt-18 text-white">"Bring Your Sofa Back to Life!"</h1>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('src/assets/SofaPhoto-2.webp')] bg-cover bg-center flex items-center justify-center text-4xl font-bold">
          <h1 className="text-center mt-18 text-white">"Expert Repair with a Personal Touch"</h1>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('src/assets/SofaPhoto-3.webp')] bg-cover bg-center flex items-center justify-center text-4xl font-bold">
          <h1 className="text-center mt-18 text-white">"Old Sofa, New Life"</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;