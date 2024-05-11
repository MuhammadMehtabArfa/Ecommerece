"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SlideFour from "./SlideFour";
import { Autoplay } from "swiper/modules";
const data = [
  { image: "/images/product3.png", image2: "/images/levis.png" },
  { image: "/images/product4.png", image2: "/images/prada.png" },
];
const SliderFour: React.FC = () => {
  return (
    <>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pl-9 font-libre mt-6 mb-2 font-bold">
        Trending Offers
      </h1>
      <div className="mb-5 pl-5">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            1400: {
              slidesPerView: 1.7,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideFour image2={item.image2} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderFour;
