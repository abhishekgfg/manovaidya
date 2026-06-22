import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
