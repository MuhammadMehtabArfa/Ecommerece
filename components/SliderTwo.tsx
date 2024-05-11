"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slidetwo from "./Slidetwo";
import { Autoplay } from "swiper/modules";
const data = [
  { image: "/images/product2.png" },
  { image: "/images/product1.png" },
  { image: "/images/product3.png" },
  { image: "/images/product4.png" },
  { image: "/images/product.png" },
  { image: "/images/product6.png" },
];
const SliderTwo: React.FC = () => {
  return (
    <>
      <h1 className="text-[35px] pl-9 font-libre mt-6 mb-2 font-bold">
        Trending Now
      </h1>
      <div className="mb-5 pl-5">
        <Swiper
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4.3,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Slidetwo image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderTwo;
