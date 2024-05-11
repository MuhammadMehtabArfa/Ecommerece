import React from "react";
import Image from "next/image";
interface Props {
  image: string;
  image2: string;
}

const SlideOne: React.FC<Props> = ({ image, image2 }) => {
  return (
    <>
      <div className="flex border rounded-[20px] border-black shadow overflow-hidden w-full">
        {/* Left side image */}
        <div className="w-1/2">
          <div className="w-full object-cover h-[500px] relative">
            <Image
              src={image} // Double-check path
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side with background color */}
        <div className="w-1/2 flex gap-10 flex-col bg-white p-4">
          {/* Logo */}
          <div className="w-1/2 mx-auto h-[78px] mt-[100px] relative">
            <Image
              src={image2} // Double-check path
              alt="Image"
              layout="fill"
              className=""
            />
          </div>
          {/* Text */}
          <div className=" mt-[10px] font-libre text-center text-dull  text-[40px]">
            Min 50% off
          </div>
          {/* Button */}
          <button className="px-3 py-1 text-[20px] rounded-md mt-[-30px]  border border-black bg-transparent mx-auto">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};

export default SlideOne;
