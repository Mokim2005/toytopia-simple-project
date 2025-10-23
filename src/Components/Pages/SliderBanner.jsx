import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SliderBanner = () => {
  return (
    <div className="w-full md:w-[600px] lg:w-[1000px] mx-auto my-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/WvKYK6qH/still-life-crochet-plushies-23-2151091201.jpg"
            alt="Slide 1"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/x8zCRv89/istockphoto-1332455278-612x612.jpg"
            alt="Slide 2"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/DPtr95Ch/istockphoto-1202500519-612x612.jpg"
            alt="Slide 3"
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderBanner;
