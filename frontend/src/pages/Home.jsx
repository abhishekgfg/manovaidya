import React from "react";
import CareStagesSection from "../homepage/CareStagesSection";
import ConditionsSupportSection from "../homepage/ConditionsSupportSection";
import HeroSection from "../homepage/HeroSection";
import InsightsFaqSection from "../homepage/InsightsFaqSection";
import ScienceStoriesSection from "../homepage/ScienceStoriesSection";
import WhyChooseSection from "../homepage/WhyChooseSection";

function Home() {
  return (
    <React.Fragment>
      <main>
        <HeroSection />
        <CareStagesSection />
        <WhyChooseSection />
        <ConditionsSupportSection />
        <ScienceStoriesSection />
        <InsightsFaqSection />
      </main>
    </React.Fragment>
  );
}

export default Home;
