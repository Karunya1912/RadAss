import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./About.css"; 
import History from "./History";
import Team from "./Team";
import Values from "./Values";
import Mission from "./Mission";

const About = () => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    setAnimationClass("fade-in");
  }, []);

  return (
    <div className={`about-container ${animationClass}`}>
      <nav>
        <Link to="/about/history">History</Link>
        <Link to="/about/mission">Mission</Link>
        <Link to="/about/team">Team</Link>
        <Link to="/about/values">Values</Link>
      </nav>
      <div>
        <Routes>
          <Route path="history" element={<History />} />
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="values" element={<Values />} />
        </Routes>
      </div>
    </div>
  );
};

export default About;
