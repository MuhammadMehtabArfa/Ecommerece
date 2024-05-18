"use client"
import React, { useState } from "react";
import Slidetwo from "@/components/Slidetwo";
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
  },]
const Filter = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  return <>
  <button className="bg-blue px-3 py-1 my-3 ml-5 text-white" onClick={toggleDrawer}>Filter</button>
  <div className="flex w-full">

 {/* Filter */}
  {drawer && <div className={` ${drawer &&"w-[20%] mx-auto"} `}>hello</div>}
 

 {/* Products */}
 <div className={`grid mx-auto ${drawer ? " lg:grid-cols-3 grid justify-between  md:grid-cols-2 grid-cols-1 gap-[30px]" : "lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-[20px]"} `}>{data.map((item, index) => (
           <div key={index} className="  w-full height-auto">
               <div className=""><Slidetwo image={item.image} id={item.id} /></div>
             
           </div>
         ))}</div>

  </div>
 
 
  
 
  </>;
};

export default Filter;
