"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import ReviewCard from "./ReviewCard";
const data = [
  { image: "/images/blog.png" },
  { image: "/images/blog2.png" },
  { image: "/images/blog.png" },
];
const ReviewSlider: React.FC = () => {
  return (
    <>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pl-9 font-libre mt-6 mb-2 font-bold">
        What our Customers say
      </h1>
      <div className="mb-5 pl-5">
        <Swiper
          navigation={true}
          centeredSlides={true}
          loop={true}
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
              slidesPerView: 1.5,
              spaceBetween: 20,
            },

            1400: {
              slidesPerView: 2,
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
              <ReviewCard image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReviewSlider;
