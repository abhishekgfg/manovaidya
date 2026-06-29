import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ApproachPage from "./pages/ApproachPage";
import AboutDoctorPage from "./pages/AboutDoctorPage";
import AboutManovaidyaPage from "./pages/AboutManovaidyaPage";
import Home from "./pages/Home";
import MindBodyWellbeingPage from "./pages/MindBodyWellbeingPage";
import SeniorMindCarePage from "./pages/SeniorMindCarePage";
import WomenHealthCarePage from "./pages/WomenHealthCarePage";
import AdultMentalWellnessPage from "./pages/AdultMentalWellnessPage";
import TeenMentalWellnessPage from "./pages/TeenMentalWellnessPage";
import TeenStressAnxietyIndiaPage from "./teenmental/TeenStressAnxietyIndiaPage";
import TeenDepressionLowMoodIndiaPage from "./teenmental/TeenDepressionLowMoodIndiaPage";
import ExamPerformancePressureIndiaPage from "./teenmental/ExamPerformancePressureIndiaPage";
import ChildHealthCarePage from "./pages/ChildHealthCarePage";
import ADHDChildArticlePage from "./childhealthcare/ADHDChildArticlePage";
import AutismTreatmentIndiaPage from "./childhealthcare/AutismTreatmentIndiaPage";
import SpeechDelaySupportIndiaPage from "./childhealthcare/SpeechDelaySupportIndiaPage";
import LearningAttentionDifficultiesIndiaPage from "./childhealthcare/LearningAttentionDifficultiesIndiaPage";
import BehaviouralConcernsChildrenIndiaPage from "./childhealthcare/BehaviouralConcernsChildrenIndiaPage";
import ChildDevelopmentSupportIndiaPage from "./childhealthcare/ChildDevelopmentSupportIndiaPage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  React.useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutDoctorPage />} />
          <Route path="/about/doctor" element={<AboutDoctorPage />} />
          <Route path="/about/manovaidya" element={<AboutManovaidyaPage />} />
          <Route path="/about/approach" element={<ApproachPage />} />
          <Route path="/mind-body-wellbeing" element={<MindBodyWellbeingPage />} />
          <Route path="/senior-mind-memory-care" element={<SeniorMindCarePage />} />
          <Route path="/women-health-care" element={<WomenHealthCarePage />} />
          <Route path="/adult-mental-wellness" element={<AdultMentalWellnessPage />} />
          <Route path="/teen-mental-wellness" element={<TeenMentalWellnessPage />} />
          <Route path="/teen-stress-anxiety-support" element={<TeenStressAnxietyIndiaPage />} />
          <Route path="/teen-stress-anxiety-support/" element={<TeenStressAnxietyIndiaPage />} />
          <Route path="/teen-depression-support" element={<TeenDepressionLowMoodIndiaPage />} />
          <Route path="/teen-depression-support/" element={<TeenDepressionLowMoodIndiaPage />} />
          <Route path="/exam-performance-pressure" element={<ExamPerformancePressureIndiaPage />} />
          <Route path="/exam-performance-pressure/" element={<ExamPerformancePressureIndiaPage />} />
          <Route path="/child-health-care" element={<ChildHealthCarePage />} />
          <Route path="/child-health-care/adhd-child" element={<ADHDChildArticlePage />} />
          <Route path="/autism-treatment-india" element={<AutismTreatmentIndiaPage />} />
          <Route path="/autism-treatment-india/" element={<AutismTreatmentIndiaPage />} />
          <Route path="/speech-delay-support-india" element={<SpeechDelaySupportIndiaPage />} />
          <Route path="/speech-delay-support-india/" element={<SpeechDelaySupportIndiaPage />} />
          <Route path="/learning-attention-difficulties-india" element={<LearningAttentionDifficultiesIndiaPage />} />
          <Route path="/learning-attention-difficulties-india/" element={<LearningAttentionDifficultiesIndiaPage />} />
          <Route path="/behavioural-concerns-children-india" element={<BehaviouralConcernsChildrenIndiaPage />} />
          <Route path="/behavioural-concerns-children-india/" element={<BehaviouralConcernsChildrenIndiaPage />} />
          <Route path="/child-development-support-india" element={<ChildDevelopmentSupportIndiaPage />} />
          <Route path="/child-development-support-india/" element={<ChildDevelopmentSupportIndiaPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
