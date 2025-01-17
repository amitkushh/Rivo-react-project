import React from "react";
import star from "../assets/star.svg";
import productsOne from "../assets/our-products/pexels-dima-valkov-1.svg";
import productsTwo from "../assets/our-products/pexels-heitor-verdi-2.svg";
import productsThree from "../assets/our-products/pexels-heitor-3.svg";
import productsFour from "../assets/our-products/pexels-monstera-4.svg";
import productsFive from "../assets/our-products/pexels-dima-valkov-5.svg";
import productsSix from "../assets/our-products/pexels-dima-valkov-6.svg";
import productsSeven from "../assets/our-products/pexels-dima-valkov-7.svg";
import productsEight from "../assets/our-products/pexels-monstera-8.svg";

function OurProducts() {
  const ourProducts = [
    {
      img: productsOne,
      title: "Spread Collar Shirt",
      price: "48.99",
      rating: "5.0",
    },
    {
      img: productsTwo,
      title: "White Solid Formal Shirt",
      price: "39.00",
      rating: "4.9",
    },
    {
      img: productsThree,
      title: "Shine On Me Blouse",
      price: "42.99",
      rating: "4.8",
    },
    {
      img: productsFour,
      title: "Gray Solid Padded Jacket",
      price: "32.99",
      rating: "4.7",
    },
    {
      img: productsFive,
      title: "Printed Loose T-shirt",
      price: "39.99",
      rating: "5.0",
    },
    {
      img: productsSix,
      title: "Summer Wind Crop Shirt",
      price: "39.45",
      rating: "4.7",
    },
    {
      img: productsSeven,
      title: "Tailored Jacket",
      price: "46.00",
      rating: "4.3",
    },
    {
      img: productsEight,
      title: "Solid Round Neck T-shirt",
      price: "36.00",
      rating: "5.0",
    },
  ];

  return (
    <div className="md:py-20 md:px-12 lg:py-20 lg:px-36">
      <div>
        <h2 className="text-4xl font-semibold text-center text-para mb-4">
          Our products
        </h2>
        <p className="text-center clear-start mb-8"></p>
      </div>

      {/* filter section */}

      <div>
        <ul className="uppercase flex justify-center items-center gap-5 px-11 flex-wrap">
          <li>sale</li>
          <li>hot</li>
          <li>new arrivals</li>
          <li>accessories</li>
        </ul>
      </div>

      {/* filter section */}
      {/* clothes section */}
      <div className="grid grid-cols-2 justify-center items-center md:grid-cols-3 lg:grid-cols-4">
        {ourProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-9"
          >
            <div className="bg-[#e5e6ee]">
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
      {/* clothes section */}
    </div>
  );
}

export default OurProducts;
