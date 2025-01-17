import React from "react";
import girl from "../assets/hero-image.png";
import dottedLine from "../assets/dotted-line.svg";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-top py-9 md:py-20 md:flex-row md:px-12 lg:py-20 lg:flex-row lg:px-36">
      <div className="flex flex-col justify-center items-center bg-top md:w-1/2 md:items-start lg:w-1/2 lg:items-start">
        <h1 className="font-bold text-6xl text-center mb-4 text-para md:max-w-[450px]  md:text-start lg:max-w-[450px]  lg:text-start">
          Discover and Find Your Own Fashion!
        </h1>
        <p className="text-center mb-8 text-para md:text-start md:max-w-[350px] lg:text-start lg:max-w-[350px]">
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className="capitalize bg-para text-white px-4 py-2">
          explore now
        </button>
      </div>

      {/* image section  */}
      <div className="mt-16 flex justify-center items-center md:w-1/2 md:mt-0 lg:w-1/2 lg:mt-0">
        <div className="bg-imgbg rounded-tl-[100px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[90px] relative">
          <img
            src={dottedLine}
            className="absolute top-72 left-4"
            height={70}
            width={70}
          />
          <img src={girl} alt="girl" height={300} width={300} />
          <img
            src={dottedLine}
            className="absolute bottom-64 left-52"
            height={70}
            width={70}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
