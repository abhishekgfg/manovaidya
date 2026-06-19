import React from "react";
import WomenHealthCareConcernsSection from "../womenhealthcare/WomenHealthCareConcernsSection";
import WomenHealthCareHeroSection from "../womenhealthcare/WomenHealthCareHeroSection";
import WomenHealthCareSignsSection from "../womenhealthcare/WomenHealthCareSignsSection";

function WomenHealthCarePage() {
  return (
    <main>
      <WomenHealthCareHeroSection />
      <WomenHealthCareConcernsSection />
      <WomenHealthCareSignsSection />
    </main>
  );
}

export default WomenHealthCarePage;
