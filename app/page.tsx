"use client"
import Sliderone from "@/components/Sliderone";
import SliderTwo from "@/components/SliderTwo";
import SliderThree from "@/components/SliderThree";
import SliderFour from "@/components/SliderFour";
import SliderFive from "@/components/SlideFive";
import Sectionsix from "@/components/Sectionsix";
import ReviewSlider from "@/components/ReviewSlider";
import BlogSlider from "@/components/BlogSlider";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div className="">
      {" "}
  
        <Sliderone/>
       <div className="md:mt-[60px] mt-[40px]"><SliderTwo  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><SliderThree  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><SliderFour  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><SliderFive  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><Sectionsix  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><ReviewSlider  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><BlogSlider  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><Features  /></div> 
       <div className="md:mt-[60px] mt-[40px]"><AboutUs  /></div> 
    </div>
  );
}
