import React from "react";
import Image from "next/image";
interface Props {
  image: string;
}
const ReviewCard: React.FC<Props> = ({ image }) => {
  return (
    <>
      <div className="mx-3 flex-col justify-center items-center gap-8 border border-black shadow-lg rounded-lg p-[20px]">
        {/* image */}
        <div className="w-[70px] object-cover h-[70px] mx-auto relative">
          <Image
            src={image} // Double-check path
            alt="image"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
        {/* stars */}

        <div className="w-[150px] mx-auto object-cover h-[30px]  relative">
          <Image
            src="/images/stars.png" // Double-check path
            alt="image"
            layout="fill"
            className="pt-2"
          />
        </div>
        {/* text */}
        <div className="text-justify pt-6 ">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            architecto dolorum in obcaecati id rem repellat dolore! Vel sunt
            repellendus maiores. Consequatur alias doloribus dolore odio nisi
            aut optio facere. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Obcaecati ut a placeat labore earum excepturi iste vel aliquam
            aut suscipit. Illum nam corrupti eaque debitis, pariatur modi
            expedita numquam. Iure?
          </h1>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
