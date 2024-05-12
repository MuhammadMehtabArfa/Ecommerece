import React from "react";
import Image from "next/image";
interface Props {
  image: string;
}
const ReviewCard: React.FC<Props> = ({ image }) => {
  return (
    <>
      <div className="mx-3 flex-col justify-center h-[250px] items-center gap-8 border border-black shadow-lg rounded-lg p-[20px]">
        {/* image */}
        <div className="w-[50px] object-cover h-[50px] mx-auto relative">
          <Image
            src={image} // Double-check path
            alt="image"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
        {/* stars */}

        <div className="w-[120px] mx-auto object-cover h-[25px]  relative">
          <Image
            src="/images/stars.png" // Double-check path
            alt="image"
            layout="fill"
            className="pt-2"
          />
        </div>
        {/* text */}
        <div className="text-justify pt-6 text-xs sm:text-xs md:text-sm lg:text-base overflow-auto">
          <h1 className="overflow-auto h-[120px] thinScrollbar">
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
