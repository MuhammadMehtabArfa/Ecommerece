import React from "react";
import Image from "next/image";

const Sectionsix = () => {
  return (
    <>
<h1 className=" font-libre text-[24px] px-[15px] font-bold pt-[40px] pb-[10px] ">Shop by Catagories</h1>
      <div className="mb-9 w-full lg:h-[500px] h-auto  grid grid-cols-1 px-[15px] md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {/* 1st image */}
        <div className="  rounded-md overflow-hidden h-[500px] gap-14 relative">
          <Image
            src="/images/catagory1.png" // Double-check path
            alt="image"
            layout="fill"
            className="object-cover"
          />
        </div>
        {/* 2nd Image */}
        <div className="flex-col h-full gap-2 ">
          <div className="w-full rounded-md overflow-hidden  h-[247px] mb-[6px] relative">
            <Image
              src="/images/catagory2.png" // Double-check path
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden object-cover h-[247px]  relative">
            <Image
              src="/images/catagory3.png" // Double-check path
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
        {/* 3rd image */}
        <div className="flex-col gap-2">
          <div className="w-full rounded-md overflow-hidden  h-[247px] mb-[6px] relative">
            <Image
              src="/images/catagory4.png" // Double-check path
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex gap-2">
            <div className="w-[50%] rounded-md overflow-hidden  h-[247px] relative">
              <Image
                src="/images/catagory3.png" // Double-check path
                alt="image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="w-[50%] rounded-md overflow-hidden object-cover h-[247px] relative">
              <Image
                src="/images/product2.png" // Double-check path
                alt="image"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectionsix;
