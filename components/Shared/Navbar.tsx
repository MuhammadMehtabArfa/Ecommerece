"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import { usePathname } from "next/navigation";

const menu: {
  name: string;
  link: string;
}[] = [
  { name: "Men", link: "/" },
  { name: "Women", link: "/women" },
  { name: "Kids", link: "/kids" },
  { name: "Shop", link: "/shop" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const activePath = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="hidden xl:flex bg-white  justify-between  px-9 p-3">
        {/* left */}
        <div className="flex gap-[100px]">
          {/* logo */}
          <div className="w-10 h-10 relative">
            <Image src="/images/logo.png" alt="LOGO" layout="fill" />
          </div>
          {/* links */}
          <div className="flex gap-[40px] pt-3 font-bold ">
            {menu.map(({ name, link }, index) => {
              const isActive = activePath.startsWith(link);
              return (
                <Link
                  key={index}
                  href={link}
                  className={
                    isActive
                      ? "text-blue-900  bg-slate-200 px-3"
                      : "hover:text-blue-900 text-[18px]"
                  }
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* right */}
        <div className="flex gap-[60px]">
          {/* input search */}
          <div className="flex rounded-md border border-black bg-gray-200 p-1">
            <input
              type="text"
              name="search"
              placeholder="Search here"
              className="w-[250px] outline-none bg-transparent flex-grow"
            />
            <button className="flex items-center justify-center">
              <svg
                className="h-6 w-6 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"
                />
              </svg>
            </button>
          </div>
          {/* svgs and icon */}
          <div className="flex gap-[40px]">
            <button className="pt-1 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 1024 1024"
                height="2em"
                width="2em"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            </button>
            <button className="pt-1 pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
              >
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" />
                <circle cx="10.5" cy="19.5" r="1.5" />
                <circle cx="17.5" cy="19.5" r="1.5" />
              </svg>
            </button>
            <div className=" flex gap-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/product.png"
                  className="rounded-full border"
                  alt="LOGO"
                  layout="fill"
                />
              </div>
              <h1 className="font-bold pt-2 ">Emily</h1>
            </div>
          </div>
        </div>
      </div>

      {/* small screens */}
      <div className="xl:hidden p-3 flex justify-between ">
        <button className="" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 1024 1024"
            height="2em"
            width="2em"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
          </svg>
        </button>
        {/* search */}
        <div className="flex rounded-md border border-black px-3 bg-gray-200 py-1">
          <input
            type="text"
            name="search"
            placeholder="Search here"
            className="w-full outline-none bg-transparent flex-grow"
          />
          <button className="flex items-center justify-center">
            <svg
              className="h-6 w-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                fillRule="evenodd"
                d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
              />
              <path
                fillRule="evenodd"
                d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"
              />
            </svg>
          </button>
        </div>
        {/* logo */}
        <div className="w-9 h-9 relative">
          <Image src="/images/logo.png" alt="LOGO" layout="fill" className="" />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="!w-full"
      >
        <div className="">
          {/* user */}
          <div className=" mt-6 items-center flex gap-2 justify-center">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/images/product.png"
                className="rounded-full border"
                alt="LOGO"
                layout="fill"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl pt-2 ">Emily</h1>
            </div>
          </div>
          {/* svgs */}
          <div className=" flex gap-[50px] items-center justify-center mt-6">
            <button className="pt-1 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 1024 1024"
                height="2em"
                width="2em"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            </button>
            <button className="pt-1 pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
              >
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" />
                <circle cx="10.5" cy="19.5" r="1.5" />
                <circle cx="17.5" cy="19.5" r="1.5" />
              </svg>
            </button>
          </div>

          {/* links */}
          <div className="flex flex-col mt-8 justify-center items-center  gap-[40px] pt-3 font-bold ">
            {menu.map(({ name, link }, index) => (
              <Link
                key={index}
                href={link}
                className="hover:text-blue-900 text-[20px] "
                onClick={() => setIsOpen(!isOpen)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
