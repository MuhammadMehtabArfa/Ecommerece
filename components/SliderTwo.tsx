"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Slidetwo from "./Slidetwo";
import { Autoplay } from "swiper/modules";
const data = [
  {
    id: 1,
    images: [
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
    ],
    image: "/images/product2.png",
  },
  {
    id: 2,
    images: [
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
    ],
    image: "/images/product1.png",
  },
  {
    id: 3,
    images: [
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
    ],
    image: "/images/product3.png",
  },
  {
    id: 4,
    images: [
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
    ],
    image: "/images/product4.png",
  },
  {
    id: 5,
    images: [
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
    ],
    image: "/images/product.png",
  },
  {
    id: 6,
    images: [
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
    ],
    image: "/images/product6.png",
  },
  {
    id: 7,
    images: [
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
    ],
    image: "/images/product2.png",
  },
  {
    id: 8,
    images: [
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
    ],
    image: "/images/product1.png",
  },
  {
    id: 9,
    images: [
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
    ],
    image: "/images/product3.png",
  },
  {
    id: 10,
    images: [
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
    ],
    image: "/images/product4.png",
  },
  {
    id: 11,
    images: [
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
    ],
    image: "/images/product.png",
  },
  {
    id: 12,
    images: [
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
      { original: "/images/product6.png", thumbnail: "/images/product6.png" },
    ],
    image: "/images/product6.png",
  },
  {
    id: 13,
    images: [
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
      { original: "/images/product2.png", thumbnail: "/images/product2.png" },
    ],
    image: "/images/product2.png",
  },
  {
    id: 14,
    images: [
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
      { original: "/images/product1.png", thumbnail: "/images/product1.png" },
    ],
    image: "/images/product1.png",
  },
  {
    id: 15,
    images: [
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
      { original: "/images/product3.png", thumbnail: "/images/product3.png" },
    ],
    image: "/images/product3.png",
  },
  {
    id: 16,
    images: [
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
      { original: "/images/product4.png", thumbnail: "/images/product4.png" },
    ],
    image: "/images/product4.png",
  },
  {
    id: 17,
    images: [
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
      { original: "/images/product.png", thumbnail: "/images/product.png" },
    ],
    image: "/images/product.png",
  },
];
const SliderTwo: React.FC = () => {
  return (
    <>
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pl-9 font-libre mt-6 mb-2 font-bold">
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
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Slidetwo id={item.id} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SliderTwo;
