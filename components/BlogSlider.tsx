"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Autoplay } from "swiper/modules";
import BlogSlide from "./BlogSlide";
const data = [
  { image: "/images/blog.png" },
  { image: "/images/blog2.png" },
  { image: "/images/blog.png" },
];
const BlogSlider: React.FC = () => {
  return (
    <>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pl-9 font-libre mt-8 mb-2 font-bold">
        OUR BLOGS
      </h1>
      <div className="mb-5 pl-5">
        <Swiper
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

            1100: {
              slidesPerView: 2.2,
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
              <BlogSlide image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center items-center">
        <button className="px-3 py-1 text-lg md:text-xl lg:text-2xl rounded-md   border hover:font-bold border-black bg-transparent mx-auto mt-2 md:mt-5 lg:mt-7">
          Readmore
        </button>
      </div>
    </>
  );
};

export default BlogSlider;
