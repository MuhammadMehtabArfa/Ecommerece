import React from "react";
import Image from "next/image";
interface Props {
  image: string;
}
const BlogSlide: React.FC<Props> = ({ image }) => {
  return (
    <>
      <div className="flex">
        {/* Left side image */}
        <div className="hidden lg:block w-3/5">
          <div className="w-full object-cover h-full  relative">
            <Image
              src={image} // Double-check path
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side with background color */}
        <div className="lg:w-2/5 w-full font-libre  bg-gray-100 flex flex-col gap-3 p-2">
          {/* heading */}
          <div className="font-libre text-base sm:base md:text-lg lg:text-xl px-[15px] font-bold pt-2  text-dull">
            Blog
          </div>
          <div className="font-bold text-sm sm:sm md:text-base lg:text-lg">
            Discover new way to decorate your home .
          </div>
          {/* Text */}
          <div className="">
            <h1 className="text-sm  text-justify  lg:h-[100px] lg:overflow-auto thinScrollbar text-dull  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              labore cum possimus libero asperiores, doloremque error harum
              obcaecati voluptatum eligendi, minima fuga, earum maxime
              perferendis culpa laboriosam molestiae aliquid dolorum!
            </h1>
          </div>

          {/* Author */}
          <h1
            className=" leading-10 font-bold font-libre pt-5
           underline-offset-8 underline text-[14px]"
          >
            By Shams Ali
          </h1>
        </div>
      </div>
    </>
  );
};

export default BlogSlide;
