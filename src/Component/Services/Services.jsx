import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

let items =["1" ,"2" ,"3" ,"4" ,"5"]
export default function Services() {
    const [first, setfirst] = useState(2)
  return (
    <>
      <Swiper
      onActiveIndexChange={(e)=>{ setfirst(e.activeIndex)}}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {items.map((ele, index)=>{
            return <SwiperSlide><div className={`${first == index ? "bg-red-500" :""}`}>
                {ele}
                </div></SwiperSlide>
        })}
        
      </Swiper>
    </>
  );
}
