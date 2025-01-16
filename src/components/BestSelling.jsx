import React from "react";
import MoveRight from "../assets/move-right.svg";
import { Link } from "react-router-dom";
import productOne from "../assets/best-selling-images/pexels-dima-valkov-1.svg";
import productTwo from "../assets/best-selling-images/pexels-dima-valkov-2.svg";
import productThree from "../assets/best-selling-images/pexels-dima-valkov-3.svg";
import star from "../assets/star.svg";

function BestSelling() {
  const products = [
    {
      img: productOne,
      title: "Regular Fit Long Sleeve Top",
      price: "38.99",
      rating: "5.0",
    },
    {
      img: productTwo,
      title: "Black Crop Tailored Jacket",
      price: "62.99",
      rating: "4.9",
    },
    {
      img: productThree,
      title: "Textured Sunset Shirt",
      price: "49.99",
      rating: "5.0",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16 ">
      <div>
        <h2 className="text-4xl font-semibold text-center text-para mb-4 px-11">
          Best selling
        </h2>
        <p className="text-center px-11">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-9"
          >
            <div className="bg-[#93b9a2]">
              <img src={product.img} alt="img" />
            </div>
            <div>
              <p className="text-center text-darkpara mt-5  mb-2">
                {product.title}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center">
                  <span>${product.price}</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span>{product.rating}</span>
                  <img src={star} alt="star" width={10} height={10} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
