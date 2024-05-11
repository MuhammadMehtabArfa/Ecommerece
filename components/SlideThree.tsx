import React from "react";
import Image from "next/image";
import { ADStarOutlined } from "@icongo/ad/lib/ADStarOutlined";
interface Props {
  image: string;
}
const SlideThree: React.FC<Props> = ({ image }) => {
  return (
    <div className="rounded-xl border w-full shadow-lg flex-col gap-5 ml-4 mt-3">
      <div className="w-full h-[250px] relative">
        <Image
          alt="image"
          src={image}
          layout="fill"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="flex-col justify-center items-center mt-3 pl-3 gap-2">
        <div className="mt-5 pt-4 w-[135px] h-[62px] mx-auto relative">
          <Image
            alt="image"
            src="/images/levis.png"
            layout="fill"
            className="rounded-t-xl "
          />
        </div>
        <div className=" py-5 flex-col text-center ">
          <h1 className="mb-4 font-libre text-[26px] ">Best of Styles</h1>
          <h1 className="text-dull text-[16px] ">Under RS.799</h1>
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
