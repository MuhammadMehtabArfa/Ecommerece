"use client";
import React from "react";
import SlideOne from "./slideOne";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const Sliderone = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <div className="bg-gray-300  hidden md:flex justify-between py-1 px-3 ">
          <div className=" flex gap-[30px] text-center justify center items-center">
            <h1 className="font-libre text-black text-sm">
              Invite Friends and get 50% off on your next purchase{" "}
            </h1>
            <span>
              <a className="text-link" href="http://">
                invite now
              </a>
            </span>
          </div>
          <button className="" onClick={toggleDrawer}>
            {" "}
            <svg
              className="pt-1 right-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
              height="1em"
              width="1em"
            >
              <path d="m1115 1024 690 691-90 90-691-690-691 690-90-90 690-691-690-691 90-90 691 690 691-690 90 90z" />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}

      {/* 1st slider */}
      <div className="w-full">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          className="mySwiper"
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination,Autoplay]}
        >
          <SwiperSlide>
            {" "}
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOne />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliderone;
