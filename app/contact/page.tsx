"use client";
import AboutUs from "@/components/AboutUs";
import React from "react";

const page = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="mt-[30px]">
        {" "}
        <AboutUs />
        <div className="w-full md:px-4 md:pt-4 ">
          <form
            onSubmit={handleSubmit}
            className="flex p-4 mt-4 bg-slate-100 rounded-md shadow-md shadow-footer  m-5 md:mx-[20%] lg:mx-[27%] justify-center align-middle items-center flex-col gap-5"
          >
            <h1 className="font-bold font-libre text-lg"> Contact US</h1>
            <label htmlFor="email" className="font-bold font-libre">
              Email
            </label>
            <input required id="email" className="md:w-2/5" type="email" />

            <label htmlFor="subject" className="font-bold font-libre">
              Subject
            </label>
            <input required id="subject" className="md:w-2/5" type="text" />
            <label htmlFor="message" className="font-bold font-libre">
              Message
            </label>
            <textarea
              required
              className="md:zw-2/5  outline-blue leading-tight"
              id="message"
              rows={4}
            />
            <button
              type="submit"
              value="Submit"
              className="bg-blue text-lg rounded-md  text-white px-3 py-1"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
