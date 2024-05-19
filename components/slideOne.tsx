import React from "react";
import Image from "next/image";

const SlideOne = () => {
  return (
    <>
      <div className="flex">
        {/* Left side image */}
        <div className="hidden  lg:block w-1/2">
          <div className="w-full object-cover h-[92dvh] relative">
            <Image
              src="/images/1stslider.png" // Double-check path
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side with background color */}
        <div className=" w-full h-[92dvh] lg:w-1/2 flex gap-10 flex-col bg-[url('/images/herobg.png')]  p-4">
          {/* Logo */}
          <div className="w-1/2 mx-auto h-[78px] mt-[100px] relative">
            <Image
              src="/images/prada.png" // Double-check path
              alt="Image"
              layout="fill"
              className=""
            />
          </div>
          {/* Text */}
          <div className=" font-libre text-center text-dull text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Big Fashion Festival <br /> 50% - 80% off
          </div>
          {/* Button */}
          <button className="px-3 py-1 text-lg md:text-xl lg:text-2xl rounded-md mt-[-30px]  border hover:font-bold border-black bg-transparent mx-auto">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideOne;
