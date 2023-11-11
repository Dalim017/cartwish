import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the Power of the latst iphone 14 with our most pro camera ever."
        link="/product/654132a98a8b5f12d8b2c930"
        image={iphone}
      />
      {/* Featured Products */}
      <FeaturedProducts />
      {/* Hero Section */}
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
        link="/product/654132a98a8b5f12d8b2c938"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
