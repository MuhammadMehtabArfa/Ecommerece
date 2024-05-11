import React from "react";
import Image from "next/image";
import { ADStarOutlined } from "@icongo/ad/lib/ADStarOutlined";
interface Props {
  image: string;
}
const SlideThree: React.FC<Props> = ({ image }) => {
  return (
    <div className="rounded-t-xl border w-full shadow-lg flex-col gap-5 ml-4 mt-3">
      <div className="w-full h-[170px] relative">
        <Image
          alt="image"
          src={image}
          layout="fill"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center  pl-3 gap-1">
        <div className="mt-5  w-[100px] h-[50px] mx-auto relative">
          <Image
            alt="image"
            src="/images/levis.png"
            layout="fill"
            className="rounded-t-xl "
          />
        </div>
        <div className=" py-3 flex-col text-center ">
          <h1 className=" font-libre text-lg md:text-xl lg:text-2xl ">
            Best of Styles
          </h1>
          <h1 className="text-dull text-base md:text-lg lg:text-xl">
            Under RS.799
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
