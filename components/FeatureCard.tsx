import React from "react";
import Image from "next/image";
interface Props {
  icon: string;
  name: string;
  description: string;
}

const FeatureCard: React.FC<Props> = ({ icon, name, description }) => {
  return (
    <div className="w-[290px] flex-col align-middle p-5 bg-slate-100  justify-center items-center">
      <div className="w-[50px] object-cover h-[50px] mx-auto relative">
        <Image
          src={icon} // Double-check path
          alt="image"
          layout="fill"
          className=" "
        />
      </div>
      <div className="font-libre text-center pt-4 ">
        <h1 className="text-[22px] font-bold">{name}</h1>
        <h1 className="text-[16px] text-dull">{description}</h1>
      </div>
    </div>
  );
};

export default FeatureCard;
