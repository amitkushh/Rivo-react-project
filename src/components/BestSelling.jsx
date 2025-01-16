import React from "react";
import MoveRight from "../assets/move-right.svg";
import { Link } from "react-router-dom";

function BestSelling() {
  const products = [
    {
      img: "",
      title: "Regular Fit Long Sleeve Top",
      price: "38.99",
      rating: "5.0",
    },
    {
      img: "",
      title: "Black Crop Tailored Jacket",
      price: "62.99",
      rating: "4.9",
    },
    {
      img: "",
      title: "Textured Sunset Shirt",
      price: "49.99",
      rating: "5.0",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div>
        <h2 className="text-4xl font-semibold text-center text-para mb-4">
          Best selling
        </h2>
        <p className="text-center">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div></div>
      <div>
        <Link to="/best-sellings">
          <button className="text-para border border-para py-2 px-6 flex justify-center items-center gap-2">
            See all <img src={MoveRight} alt="arrow" width={17} height={17} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BestSelling;
