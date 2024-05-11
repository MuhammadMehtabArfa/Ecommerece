import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import Link from "next/link";
const categories = [
    { head: "Women", list: ["Men", "All Women", "All Men", "Skirts", "Shirts"] },
  {
    head: "Shirt",
    list: ["Tops", "Jackets", "TShirts", "Shorts", "Jackets"],
  },
  {
    head: "Kids",
    list: ["All Kids", "Shirts", "TShirts", "Shorts", "Jackets"],
  },
  {
    head: "Shopping",
    list: [
      "Your cart",
      "Your orders",
      "Compared items",
      "Wishlist",
      "More links",
    ],
  },
  {
    head: "Blogs",
    list: [
      "Gift center",
      "Buying guides",
      "New arrivals",
      "Shipping Details",
      "Clearance",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="p-[20px] mt-[20px] bg-footer">
        {/* images */}
        <div className="flex gap-y-5 gap-4">
          {" "}
          <div className="w-[60px] h-[50px] relative">
            <Image alt="logo" src="/images/logowhite.png" layout="fill" />
          </div>
          <div className="w-[150px] h-[50px] relative">
            <Image
              alt="logo"
              src="/images/Globex.png"
              layout="fill"
              className=""
            />
          </div>
        </div>
        {/* footer component */}
        <div className="text-white mt-[35px] mx-[60px]">
          {/* links */}
          <div className="flex gap-2 items-center lg:items-start sm:space-x-18 flex-col md:flex-row md:space-x-10 md:ml-5">
            {categories.map((foot, index) => (
              <div key={index}>
                <h6 className="footer-head font-bold font-libre text-left">
                    <Link href="/" className="hover:bg-gray-500 px-2 py-1">{foot.head}</Link>
                  
                </h6>
                <ul className="list-none mt-2">
                  {foot.list.map((items, index) => (
                    <li
                      className="font-libre text-gray-400 hidden lg:block hover:text-white py-1"
                      key={index}
                    >
                      <a href="http://">{items}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="text-white lg:flex flex-col hidden gap-[20px] ">
              <span className="flex flex-col gap-2">
                <h6 className="footer-head font-bold font-libre">
                  Stay In Touch
                </h6>
                <p className="font-libre">
                  Stay in touch to get special offers, free giveaways and once
                  in a lifetime deals
                </p>
              </span>

              {/* mail portion */}
              <div className="flex border border-white bg-transparent px-2 py-1 gap-3 rounded-md  w-[280px]  ">
                <Mail color="white" />
                <input
                  placeholder="Enter Your Mail Here"
                  type="text"
                  className="text-white border-none outline-none bg-transparent 
     "
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-gray-400 my-4 w-full overflow-hidden"></hr>
        <div className="flex text-white font-libre justify-evenly">
          <h1 className="sm:text-sm md:text-md lg:text-lg text-sm">@2024 ALL RIGHTS RESERVED</h1>
          <h1 className="sm:text-sm md:text-md lg:text-lg text-sm"> PRIVACY POLICY</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
