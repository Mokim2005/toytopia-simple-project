import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SliderBanner = () => {
  return (
    <div className="w-11/12 mx-auto my-10 
                    bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500
                    rounded-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,    
          disableOnInteraction: false, 
          pauseOnMouseEnter: false    
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/WvKYK6qH/still-life-crochet-plushies-23-2151091201.jpg"
            alt="Slide 1"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/x8zCRv89/istockphoto-1332455278-612x612.jpg"
            alt="Slide 2"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/DPtr95Ch/istockphoto-1202500519-612x612.jpg"
            alt="Slide 3"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;