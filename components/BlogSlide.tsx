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
        <div className="w-3/5">
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
        <div className="w-2/5 font-libre  bg-gray-100  flex-col gap-7 p-4">
          {/* heading */}
          <div className=" text-dull font-libre text-[15px]">Blog</div>
          <div className="font-bold text-[18px]">
            Discover new way to decorate your home .
          </div>
          {/* Text */}
          <div className="">
            <h1 className="text-[14px]  text-justify text-dull pt-3">
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
