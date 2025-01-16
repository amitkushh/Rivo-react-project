import React from "react";
import girl from "../assets/hero-image.png";
import dottedLine from "../assets/dotted-line.svg";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center bg-top py-9">
      <div className="flex flex-col justify-center items-center bg-top">
        <h1 className="font-bold text-6xl text-center mb-4 text-para">
          Discover and Find Your Own Fashion!
        </h1>
        <p className="text-center mb-8 text-para">
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className="capitalize bg-para text-white px-4 py-2">
          explore now
        </button>
      </div>

      {/* image section  */}
      <div className="mt-16">
        <div className="bg-imgbg rounded-tl-[150px] rounded-bl-[50px] rounded-tr-[50px] rounded-br-[120px] relative">
          <img
            src={dottedLine}
            className="absolute top-96 left-4"
            height={100}
            width={100}
          />
          <img src={girl} alt="girl" height={400} width={400} />
          <img
            src={dottedLine}
            className="absolute bottom-80 left-72"
            height={100}
            width={100}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
