"use client";
import React, { useState } from "react";
import Slidetwo from "@/components/Slidetwo";
import { Search, PenLine } from "lucide-react";

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
const Filter = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);
  return (
    <>
      <button
        className="bg-blue hidden md:block px-3 py-1 my-3 ml-5 text-white"
        onClick={toggleDrawer}
      >
        Filter
      </button>
      <div className="flex w-full">
        {/* Filter */}
        {drawer && (
          <div
            className={` ${
              drawer &&
              "md:w-[20%] h-[135vh] w-[10%] flex px-3 py-3  gap-5 flex-col mx-auto shadow-black shadow-sm"
            } `}
          >
            <div className="text-lg flex font-libre justify-between ">
              <h1 className="font-bold">Filters</h1>
              <a href="" className="text-base text-blue underline">
                Clear all
              </a>
            </div>
            {/* brand */}
            <div className="flex flex-col justify-start ">
              {" "}
              <div className="flex justify-between">
                <h1 className="font-bold font-libre">Brand</h1>
                <a href="" className="text-base text-blue underline">
                  <Search className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col gap-1 font-libre">
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Parada</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Gucci</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Forever 24</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Armani</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Nike</label>
                   
              </div>
            </div>

            {/* color */}
            <div className="flex flex-col justify-start ">
              {" "}
              <div className="flex justify-between">
                <h1 className="font-bold font-libre">Color</h1>
                <a href="" className="text-base text-blue underline">
                  <Search className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col gap-1 font-libre">
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Red</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Blue</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Black </label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Green</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Other</label>
                   
              </div>
            </div>

            {/* price */}
           
            <div className="flex flex-col underline-offset-8  justify-start ">
              {" "}
              <div className="flex justify-between">
                <h1 className="font-bold font-libre">Price</h1>
                <a href="" className="text-base text-blue underline">
                  <Search className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col gap-1 font-libre">
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Rs 2000+</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Rs 4000+</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Rs 6000+</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Rs 8000+</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Rs 10000+</label>
                   
              </div>
            </div>
            {/* discount */}
            <div className="flex flex-col justify-start ">
              {" "}
              <div className="flex justify-between">
                <h1 className="font-bold font-libre">Discount</h1>
                <a href="" className="text-base text-blue underline">
                  <Search className="w-5 h-5" />
                </a>
              </div>
              <div className="flex flex-col  gap-1 font-libre">
              <label htmlFor=""><input type="checkbox" className="text-black text-sm  focus:ring-0 " name="Parada" id="" /> 20% AND ABOVE</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> 30% AND ABOVE</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> 40% AND ABOVE</label>
              <label htmlFor=""><input type="checkbox" className="text-black focus:ring-0 text-sm" name="Parada" id="" /> Above 50%</label>
                   
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        <div
          className={`grid mx-auto ${
            drawer
              ? " lg:grid-cols-3 grid justify-between  md:grid-cols-2 grid-cols-1 gap-[30px]"
              : "lg:grid-cols-4 md:grid-cols-3  grid-cols-2 gap-[20px]"
          } `}
        >
          {data.map((item, index) => (
            <div key={index} className="  w-full height-auto">
              <div className="">
                <Slidetwo image={item.image} id={item.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
