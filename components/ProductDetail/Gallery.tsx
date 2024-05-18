"use client";
import SliderFour from "@/components/SliderFour";
import SliderTwo from "@/components/SliderTwo";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";


const Gallery = ({ items }: any) => {
  const [isActive, setIsActive] = useState("details");
  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 ">
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

        <div className=" w-full ">
          <div className="flex flex-col bg-white rounded-lg shadow-md p-2">
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
            <div className="flex mt-4 items-center">
              <div className="flex-grow text-gray-500">Select Color</div>
              <span className="text-gray-500">图图网</span>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-green-500">Best Offers</div>
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <ul className="list-disc mt-2 ml-4 text-gray-700">
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
            <button className="w-1/5 bg-blue p-2 m-3 text-white rounded-md">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 border border-blue border-t-2 rounded shadow-md  p-4">
        <div className="flex text-blue underline text-lg justify-between">
          <button onClick={() => setIsActive("details")}>Detail</button>
          <button onClick={() => setIsActive("specification")}>
            specification
          </button>
          <button onClick={() => setIsActive("rating")}>rating</button>
        </div>

        <div className="mt-2">
          {isActive === "details" && (
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <h2 className="font-bold text-lg">Product Details</h2>
                <p>
                  Blue washed jacket, has a spread collar, 4 pockets, button
                  closure, long sleeves, straight hem
                </p>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-lg">Size & Fit</h2>
                <p>The model (height 5'8") is wearing a size S</p>
              </div>

              <div className="flex flex-col">
                <h2 className="font-bold text-lg">Material & Care</h2>
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
                <h1 className="text-dull font-bold text-lg">Sleeve Length</h1>{" "}
                <h1 className="text-lg">Long Sleeves</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-lg">Type</h1>
                <h1 className="text-lg">Denim Jacket</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-lg">
                  Print or Pattern Type
                </h1>
                <h1 className="text-lg">Washed</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-lg">Collar</h1>
                <h1 className="text-lg">Spread Collar</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-lg">Length</h1>
                <h1 className="text-lg">Regular</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-dull font-bold text-lg">Closure</h1>
                <h1 className="text-lg">Button</h1>
              </div>
            </div>
          )}
          {isActive === "rating" && <p>Rating is active</p>}
        </div>
      </div>
      <SliderTwo />
      <SliderFour />
    </>
  );
};

export default Gallery;
