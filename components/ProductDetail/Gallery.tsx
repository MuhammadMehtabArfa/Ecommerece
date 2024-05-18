"use client";
import SliderFour from "@/components/SliderFour";
import SliderTwo from "@/components/SliderTwo";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import ReviewCard from "../ReviewCard";

const Gallery = ({ items }: any) => {
  const [isActive, setIsActive] = useState("details");
  return (
    <>
      <div className="mt-4 py-1 mx-4 border-2 grid grid-cols-1 md:grid-cols-2 ">
        <div className="  w-full">
          {items && ( // Check if items is not null before rendering
            <ImageGallery
              showBullets
              items={items?.images}
              showNav={false}
              thumbnailPosition={"left"}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          )}
        </div>

       
          <div className=" flex w-full flex-col bg-white rounded-lg  p-5">
            <div className="flex justify-between">
              <h3 className="text-xl font-medium">
                Women's Denim Jacket (Blue)
              </h3>
              <span className="text-gray-500">Brand Name</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-gray-700 ml-1">4.4</span>
              <span className="text-gray-500 ml-1">(36 Reviews)</span>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-xl font-bold">Rs. 700</div>
              <div className="text-red-500 line-through">
                Rs. 1000 (30% off)
              </div>
            </div>
            <div className="flex mt-4">
              <select className="border rounded-md px-2 py-1 mr-2">
                <option>Select Size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <a href="#" className="text-blue-500 hover:underline">
                Size Chart{" "}
              </a>
            </div>

            <div className="flex justify-between mt-4">
              <div className="text-green-500">Best Offers</div>
              
            </div>
            <ul className="list-disc mt-2 ml-4 flex flex-col gap-4 text-gray-700">
              <li>
                {" "}
                <span className="font-bold">Special offer</span> get 25% off{" "}
                <span className="text-blue"> (T&C apply)</span>
              </li>
              <li>
                {" "}
                <span className="font-bold">Bank offer</span> get 35% off on
                credit card <span className="text-blue"> (T&C apply)</span>
              </li>
              <li>
                {" "}
                <span className="font-bold">Wallet offer</span> get upto 40% off
                via paytm wallet<span className=" text-blue"> (T&C apply)</span>
              </li>
            </ul>
            <button className="bg-blue block w-[120px] rounded-md mx-auto mt-4 font-bold text-lg  text-white ">Add to Cart</button>
          </div>
      
      </div>
      <div className="bg-white mt-4 mx-4 border border-blue border-t-[1px] rounded shadow-md  p-4">
        <div className="flex justify-between">
          <button className={`text-blue underline ${isActive === "details" && "bg-blue text-white"} font-bold hover:bg-blue hover:text-white text-lg justify-between px-2`}   onClick={() => setIsActive("details")}>Detail</button>
          <button className={`text-blue underline ${isActive === "specification" && "bg-blue text-white"} font-bold hover:bg-blue hover:text-white text-lg justify-between px-2`}  onClick={() => setIsActive("specification")}>
            Specification
          </button>
          <button className={`text-blue underline ${isActive === "rating" && "bg-blue text-white"} font-bold hover:bg-blue hover:text-white text-lg justify-between px-2`}  onClick={() => setIsActive("rating")}>Rating</button>
        </div>

        <div className="mt-2">
          {isActive === "details" && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h2 className="font-bold text-base  md:text-lg">Product Details</h2>
                <p className="text-sm md:text-base">
                  Blue washed jacket, has a spread collar, 4 pockets, button
                  closure, long sleeves, straight hem
                </p>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-base md:text-lg ">Size & Fit</h2>
                <p>The model (height 5'8") is wearing a size S</p>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-base md:text-lg ">Material & Care</h2>
                <ul className=" list-none">
                  <li>100% cotton</li>
                  <li>Machine Wash</li>
                </ul>
              </div>
            </div>
          )}
          {isActive === "specification" && (
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-base md:text-lg ">Sleeve Length</h1>{" "}
                <h1 className="text-lg">Long Sleeves</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-base md:text-lg ">Type</h1>
                <h1 className="text-lg">Denim Jacket</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-base md:text-lg ">
                  Print or Pattern Type
                </h1>
                <h1 className="text-lg">Washed</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-base md:text-lg ">Collar</h1>
                <h1 className="text-lg">Spread Collar</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-base md:text-lg ">Length</h1>
                <h1 className="text-lg">Regular</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-base md:text-lg ">Closure</h1>
                <h1 className="text-lg">Button</h1>
              </div>
            </div>
          )}
          {isActive === "rating" && <p><ReviewCard image={items.image}/></p>}
        </div>
      </div>
      <SliderTwo />
      <SliderFour />
    </>
  );
};

export default Gallery;
