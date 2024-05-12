import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  name: string;
  description: string;
}

const FeatureCard: React.FC<Props> = ({ icon, name, description }) => {
  return (
    <div className="lg:w-1/6 w-[200px] flex flex-col align-middle p-3 bg-slate-100  justify-center items-cente gap-3r">
      <div className="w-[40px]  h-[40px] mx-auto relative">
        <Image
          src={icon} // Double-check path
          alt="image"
          layout="fill"
          className=" "
        />
      </div>
      <div className="font-libre text-center pt-4 ">
        <h1 className="text-sm md:text-base lg:text-lg font-bold">{name}</h1>
        <h1 className="text-[16px] text-dull">{description}</h1>
      </div>
    </div>
  );
};

export default FeatureCard;
