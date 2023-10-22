import React from "react";
import HeroSection from "./HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";

const HomePage = () => {
  return (
    <div>
      {/* hero section */}
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the Power of the latst iphone 14 with our most pro camera ever."
        link="/"
        image={iphone}
      />
      {/* Featured Products */}
      {/* Hero Section */}
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
