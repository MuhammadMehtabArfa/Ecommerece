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
    <>
      {" "}
  
        <Sliderone/>
        <SliderTwo />
        <SliderThree />
        <SliderFour />
        <SliderFive />
        <Sectionsix />
        <ReviewSlider />
        <BlogSlider />
        <Features />
        <AboutUs />
    </>
  );
}
