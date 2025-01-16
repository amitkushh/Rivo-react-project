import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import BestSelling from "../components/BestSelling.jsx";
import OurProducts from "../components/OurProducts.jsx";
import ExclusiveOffer from "../components/ExclusiveOffer.jsx";
import DesignerClothes from "../components/DesignerClothes.jsx";
import Feedback from "../components/Feedback.jsx";

function Home() {
  return (
    <>
      <HeroSection />
      <BestSelling />
      <OurProducts />
      <ExclusiveOffer />
      <DesignerClothes />
      <Feedback />
    </>
  );
}

export default Home;
