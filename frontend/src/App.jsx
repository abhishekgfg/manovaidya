import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ApproachPage from "./pages/ApproachPage";
import AboutDoctorPage from "./pages/AboutDoctorPage";
import AboutManovaidyaPage from "./pages/AboutManovaidyaPage";
import Home from "./pages/Home";
import WomenHealthCarePage from "./pages/WomenHealthCarePage";

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
          <Route path="/women-health-care" element={<WomenHealthCarePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
