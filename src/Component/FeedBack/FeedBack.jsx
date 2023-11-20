import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';
import img1 from "../../assets/slider/Ellipse 1.svg"
import img2 from "../../assets/slider/Group 3.png"
import img3 from "../../assets/slider/Ellipse 2.svg"
import img4 from "../../assets/slider/Ellipse 3.svg"
import img5 from "../../assets/slider/Ellipse 4.svg"
import img6 from "../../assets/slider/Ellipse 5.svg"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function FeedBack() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
     <div className={`how  my-5 p-3 bg-white`}>
        <div className='flex flex-col  item-center mt-10'>
        <span className={`title1`}>Why cutomers love </span>
        <br/>
        <span className={`title2  m-auto`}>working with us</span>

        </div>
        </div>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          background:"#fff"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 pt-5 py-5"
      >
        
        <SwiperSlide>
            <div className='w-[40%] main p-5'>
          <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[40%] main p-5'>
          <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[40%] main p-5'>
          <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[40%] main p-5'>
          <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>

            </div>
        </SwiperSlide>
       
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='bg-transparent'>
            <img src={img1} className='' alt="" />
                <img src={img2} alt="" />
            <h4 className='name my-1'>Imran Khan</h4>
            <p className='profession'>Software Engineering</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-transparent'>
            <img src={img3} className='' alt="" />
                <img src={img2} alt="" />
            <h4 className='name my-3'>Imran Khan</h4>
            <p className='profession'>Software Engineering</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-transparent'>
            <img src={img4} className='' alt="" />
                <img src={img2} alt="" />
            <h4 className='name my-3'>Imran Khan</h4>
            <p className='profession'>Software Engineering</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-transparent'>
            <img src={img5} className='' alt="" />
                <img src={img2} alt="" />
            <h4 className='name my-3'>Imran Khan</h4>
            <p className='profession'>Software Engineering</p>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-transparent'>
            <img src={img6} className='' alt="" />
                <img src={img2} alt="" />
            <h4 className='name my-3'>Imran Khan</h4>
            <p className='profession'>Software Engineering</p>

          </div>
        </SwiperSlide>
        
       
      </Swiper>
    </>
  );
}

