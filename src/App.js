import React from "react";
import Contact from "./components/cp-contact";
import Profile from "./components/cp-profile";
import Skills from "./components/cp-skills";
import Education from "./components/cp-education";
import Experience from "./components/cp-experience";
import ProfessionalSummary from "./components/cp-professional-summary";


const App = () => {
  return (
    <>
      <div className="main_container">
        <Profile />
        <div className="section_divider" />
        <ProfessionalSummary />
        <div className="section_divider" />
        <Skills />
        <div className="section_divider" />
        <Education />
        <div className="section_divider" />
        <Experience />
        <div className="section_divider" />
        <Contact />
        </div>
      <div style={{ textAlign: "center" }}>© 2024 Srikanth Goud</div>
    </>
  );
};

export default App;
