import React from "react";
import FeatureCard from "./FeatureCard";
const services = [
  {
    name: "Locally Owned",
    description: "We have local boutique and sell best quality clothes",
    icon: "/images/locallyowned.png",
  },
  {
    name: "Fast Delivery",
    description: "We provide fast delivery to our customers",
    icon: "/images/delivery.png",
  },
  {
    name: "Easy Return",
    description: "We provide easy return policy",
    icon: "/images/easyreturn.png",
  },
  {
    name: "Online Support",
    description: "We offer online support ",
    icon: "/images/support.png",
  },
  {
    name: "Best Offer",
    description: "We provide the best offers ",
    icon: "/images/discount.png",
  },
];
const Features = () => {
  return (
    <>
      <div className="my-6 mt-[40px] mx-4  flex flex-wrap gap-4 justify-center">
        {services.map((item, index) => (
          <FeatureCard
            key={index}
            icon={item.icon}
            name={item.name}
            description={item.description}
          />
        ))}{" "}
      </div>
    </>
  );
};

export default Features;
