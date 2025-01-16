import React from "react";

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
      <div></div>
    </div>
  );
}

export default HeroSection;
