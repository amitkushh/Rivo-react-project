import React from "react";
import dottedLine from "../assets/exclusive/dotted-line.svg";
import girl from "../assets/exclusive/excited-white-girl.svg";

function ExclusiveOffer() {
  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div className="bg-top">
        <div>
          <h2 className="text-4xl font-semibold text-center text-para mb-7 mt-10">
            Exclusive offer
          </h2>
          <p className="text-center px-11">
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </p>
          <div className="flex justify-center items-center gap-2 my-12">
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

        <div className="relative flex flex-col justify-center items-center">
          <img
            src={dottedLine}
            alt="dotted line"
            className="absolute top-[350px] right-60"
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
