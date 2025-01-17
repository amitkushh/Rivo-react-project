import React from "react";
import dottedLine from "../assets/exclusive/dotted-line.svg";
import girl from "../assets/exclusive/excited-white-girl.svg";

function ExclusiveOffer() {
  return (
    <div className="flex flex-col justify-center items-center py-16 md:flex-row md:py-20 md:px-12 lg:flex-row lg:py-20 lg:px-36">
      <div className="bg-top md:flex md:justify-center md:items-center md:w-full lg:flex lg:justify-center lg:items-center lg:w-full">
        <div className="md:order-2 md:flex md:flex-col md:items-start lg:order-2 lg:flex lg:flex-col lg:items-start">
          <h2 className="text-4xl font-semibold text-center text-para mb-7 mt-10 md:mt-0 md:text-start lg:mt-0 lg:text-start">
            Exclusive offer
          </h2>
          <p className="text-center px-11 md:px-0 md:text-start md:max-w-[400px] lg:px-0 lg:text-start lg:max-w-[450px]">
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </p>
          <div className="flex justify-center items-center gap-2 my-12 md:items-start lg:items-start">
            <div className="bg-white text-para p-2 h-16 w-16 flex flex-col justify-center items-center">
              <span className="font-bold">06</span>
              <p className="font-semibold">Days</p>
            </div>
            <div className="bg-white text-para p-2 h-16 w-16 flex flex-col justify-center items-center">
              <span className="font-bold">18</span>
              <p className="font-semibold">Hours</p>
            </div>
            <div className="bg-white text-para p-2 h-16 w-16 flex flex-col justify-center items-center">
              <span className="font-bold">48</span>
              <p className="font-semibold">Min</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="uppercase bg-para text-white px-4 py-2">
              explore now
            </button>
          </div>
        </div>

        {/* girl image section */}

        <div className="relative flex flex-col justify-center items-center md:order-1 lg:order-1">
          <img
            src={dottedLine}
            alt="dotted line"
            className="absolute top-[350px] right-60 md:right-[250px] md:top-[350px] lg:right-[400px] lg:top-[500px]"
            width={100}
            height={100}
          />
          <img src={girl} alt="girl" className="relative z-10" />
        </div>
      </div>
    </div>
  );
}

export default ExclusiveOffer;
