import React from "react";
import clothesOne from "../assets/designer-clothes/designer-clothes-1.svg";
import clothesTwo from "../assets/designer-clothes/designer-clothes-2.svg";
import clothesThree from "../assets/designer-clothes/designer-clothes-3.svg";

function DesignerClothes() {
  const clothes = [
    {
      img: clothesOne,
      title: "Accessories",
      para: "Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.",
    },
    {
      img: clothesTwo,
      title: "Dresses",
      para: "Explore a stunning range of designer dresses, including evening gowns and chic day dresses.",
    },
    {
      img: clothesThree,
      title: "Outerwear",
      para: "Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-16">
      <div>
        <h2 className="text-4xl font-semibold text-center text-para mb-4 ">
          Designer Clothes For You
        </h2>
        <p className="text-center clear-start mb-8">
          Immerse yourself in the world of luxury fashion with our meticulously
          crafted designer clothes!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        {clothes.map((clothe, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-9"
          >
            <div>
              <img src={clothe.img} alt="img" />
            </div>
            <div>
              <p className="text-center text-darkpara font-semibold text-lg mt-5  mb-2">
                {clothe.title}
              </p>
              <p className="text-center text-darkpara">{clothe.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignerClothes;
