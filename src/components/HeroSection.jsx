import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function HeroSection() {
  return (
    <div >
         <Swiper
         modules={[Autoplay]}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         loop={true}
         className="h-80 w-full "
          >
       <SwiperSlide className="bg-[url('src/assets/SofaPhoto-1.jpg')] bg-cover bg-center text-black flex items-center justify-center text-4xl font-bold">
      "Bring Your Sofa Back to Life!"
       </SwiperSlide>
       <SwiperSlide className="bg-[url('src/assets/SofaPhoto-2.webp')] bg-cover bg-center text-black flex items-center justify-center text-4xl font-bold">
       "Expert Repair with a Personal Touch"
       </SwiperSlide>
       <SwiperSlide className="bg-[url('src/assets/SofaPhoto-3.webp')] bg-cover bg-center text-black flex items-center justify-center text-4xl font-bold">
      "Old Sofa, New Life"
      </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroSection
