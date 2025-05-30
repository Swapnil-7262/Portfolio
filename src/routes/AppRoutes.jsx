import {  Routes, Route, } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Work from "../pages/Work";

import Header from "../components/Header";
import PageTransition from "../components/PageTransition";

const AppRoutes = () => {
  return (
    <PageTransition>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Work />} />
      </Routes>
    </PageTransition>
  )
}

export default AppRoutes