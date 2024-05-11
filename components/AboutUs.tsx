import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="mx-8">
        <h1 className=" font-libre text-dull text-[20px]">About Us</h1>
        {/* parent div */}
        <div className=" font-libri transition-all lg:flex gap-3">
          {/* left div */}
          <div className="flex-col w-full lg:w-1/2 gap-y-3">
            <h1 className="font-libre  text-[25px]">Business Name</h1>
            <p className="w-full text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              consequuntur quisquam natus fuga? Est iusto facilis, deserunt
              vitae possimus dolorem exercitationem similique ea, temporibus
              suscipit, maiores hic consequuntur incidunt dicta! Nostrum
              nesciunt a dicta accusamus. Fugiat incidunt eos sint at tenetur
              ipsum accusantium. Odio nobis quae quibusdam voluptate? Incidunt
              id tempora cum possimus officia sequi quaerat illum voluptate?
              Laborum, consectetur. In, velit hic. Alias officia dolore
              voluptate quo nobis harum officiis rem aperiam nulla amet commodi
              provident numquam delectus, vitae repellat suscipit facere
              reprehenderit voluptas, dolorum cumque optio. Vel, maxime?
            </p>
            <div className="flex-col text-[17px] gap-y-1">
              <h1 className="font-libre font-bold  text-black">
                Contact Information
              </h1>
              <p className="">
                +91 1256378409
                <br />
                Someone@gmail.com
              </p>
            </div>
            <button className="my-8 border-2 border-black rounded-md bg-transparent px-4 py-1">
              Directions
            </button>
          </div>
          {/* right div */}
          <div className="w-1/2  h-auto mb-1 relative">
            <Image
              alt="image"
              src="/images/aboutus.png"
              layout="fill"
              className="rounded-md hidden lg:inline-block object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
