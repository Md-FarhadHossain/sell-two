"use client"
import './component_style/CustomarsReview.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const CustomarsReview = () => {
  return (
    <>
      <section>
        <div className='container mx-auto'>
          <div className="text-5xl font-medium text-center pt-16 text-[#3C3C3C] leading-tight">
          যারা বই টি কিনেছে তাদের রিভিউ
          </div>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='w-[25rem] h-[10rem] bg-gray-700'></div>
            <div className='w-[25rem] h-[10rem] bg-gray-700'></div>
            <div className='w-[25rem] h-[10rem] bg-gray-700'></div>
            <div className='w-[25rem] h-[10rem] bg-gray-700'></div>
            <div className='w-[25rem] h-[10rem] bg-gray-700'></div>
            <div className='w-[25rem] h-[10rem] bg-gray-700'></div>
          </div>
        </div>
        <br /><br />
      </section>
    </>
  );
};

export default CustomarsReview;
