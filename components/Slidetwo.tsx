import React from "react";
import Image from "next/image";
import { ADStarOutlined } from "@icongo/ad/lib/ADStarOutlined";
import Link from "next/link";
interface Props {
  image: string;
  id:number
}
const Slidetwo: React.FC<Props> = ({ image,id }) => {
  return (
    <Link href={`/product_detail/${id}`} className="rounded-xl  shadow-black w-full shadow-lg flex-col gap-5 ml-4 mt-3">
      <div className="w-full h-[200px] relative">
        <Image
          alt="image" 
          src={image}
          layout="fill"
          className="rounded-t-xl object-cover"
        />
      </div>{" "}
      <div className="flex flex-col mt-3 pl-3 gap-1">
        <h1 className=" font-libre text-base md:text-lg lg:text-xl font-bold">
          Womens Denim Jacket
        </h1>
        <div className=" flex gap-2">
          <h1 className=" font-libre  text-sm md:text-base lg:text-base  ">
            Brand name{" "}
          </h1>
          <span className="text-dull text-sm md:text-base lg:text-base">4.4</span>
          <ADStarOutlined className=" size-[14px] my-auto" />
        </div>
        <div className="flex gap-4 pb-3">
          <h1 className=" font-libre text-xs md:text-sm  ">
            RS 700
          </h1>

          <h1 className=" font-libre text-xs md:text-sm  my-auto line-through text-dull">
            {" "}
            Rs 1000
          </h1>
          <span className=" text-greend  text-xs md:text-sm  font-libre my-auto">
            (30% off)
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Slidetwo;
