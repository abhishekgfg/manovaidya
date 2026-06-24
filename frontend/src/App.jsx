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
import ChildHealthCarePage from "./pages/ChildHealthCarePage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";

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
          <Route path="/child-health-care" element={<ChildHealthCarePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
