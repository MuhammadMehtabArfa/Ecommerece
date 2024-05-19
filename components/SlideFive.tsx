"use client";
import React from "react";
import Image from "next/image";
import SlideOne from "./slideOne";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const SliderFive = () => {
  return (
    <>
      {/* 1st slider */}
      <div className="w-full mt-[60px]">
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
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            {" "}
            <div className="flex">
              {/* Left side image */}
              <div className="hidden lg:block w-1/2">
                <div className=" w-fullobject-cover h-[400px] relative">
                  <Image
                    src="/images/catagory4.png" // Double-check path
                    alt="image"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side with background color */}
              <div className="w-1/2  flex gap-10 flex-col bg-greenish h-[400px] p-4">
                {/* Logo */}
                <div className="w-1/2 mx-auto h-[78px] mt-[100px] relative">
                  <Image
                    src="/images/forever21.png" // Double-check path
                    alt="Image"
                    layout="fill"
                    className=""
                  />
                </div>
                {/* Text */}
                <div className=" font-libre text-center text-white  text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Big Fashion Festival <br /> 50% - 80% off
                </div>
                {/* Button */}
                <button className="px-3 py-1 text-lg md:text-xl lg:text-2xl rounded-md mt-[-30px]  border border-white text-white bg-transparent mx-auto">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex">
              {/* Left side image */}
              <div className="hidden lg:block w-1/2">
                <div className=" w-full object-cover h-[400px] relative">
                  <Image
                    src="/images/catagory3.png" // Double-check path
                    alt="image"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side with background color */}
              <div className="w-full  flex gap-10 flex-col bg-greenish h-[400px] p-4">
                {/* Logo */}
                <div className="w-1/2 mx-auto h-[78px] mt-[100px] relative">
                  <Image
                    src="/images/forever21.png" // Double-check path
                    alt="Image"
                    layout="fill"
                    className=""
                  />
                </div>
                {/* Text */}
                <div className=" font-libre text-center text-white  text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Big Fashion Festival <br /> 50% - 80% off
                </div>
                {/* Button */}
                <button className="px-3 py-1 text-lg md:text-xl lg:text-2xl rounded-md mt-[-30px]  border border-white text-white bg-transparent mx-auto">
                  Explore
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SliderFive;
