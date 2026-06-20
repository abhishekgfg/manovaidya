import React from "react";
import AdultCommonSignsSection from "../adult/AdultCommonSignsSection";
import AdultConditionsSection from "../adult/AdultConditionsSection";
import AdultMentalWellnessHeroSection from "../adult/AdultMentalWellnessHeroSection";
import AdultSupportSection from "../adult/AdultSupportSection";

function AdultMentalWellnessPage() {
  return (
    <main>
      <AdultMentalWellnessHeroSection />
      <AdultConditionsSection />
      <AdultCommonSignsSection />
      <AdultSupportSection />
    </main>
  );
}

export default AdultMentalWellnessPage;
