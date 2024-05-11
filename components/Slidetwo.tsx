import React from "react";
import Image from "next/image";
import { ADStarOutlined } from "@icongo/ad/lib/ADStarOutlined";
interface Props {
  image: string;
}
const Slidetwo: React.FC<Props> = ({ image }) => {
  return (
    <div className="rounded-xl border w-full shadow-lg flex-col gap-5 ml-4 mt-3">
      <div className="w-full h-[290px] relative">
        <Image alt="image" src={image} layout="fill" className="rounded-t-xl object-cover" />
      </div>{" "}
      <div className="flex-col mt-3 pl-3 gap-2">
        <h1 className=" font-libre text-[20px] font-bold">Womens Denim Jacket</h1>
        <div className=" flex gap-2">
          <h1 className=" font-libre text-[14px]">Brand name </h1>
          <span className="text-dull text-[14px]">4.4</span>
          <ADStarOutlined className=" size-[14px] my-auto" />
        </div>
        <div className="flex gap-4 pb-3">
          <h1 className=" font-libre text-[20px]">RS 700</h1>

          <h1 className=" font-libre text-[14px] my-auto line-through text-dull">
            {" "}
            Rs 1000
          </h1>
          <span className=" text-greend text-[14px] font-libre my-auto">
            (30% off)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slidetwo;
