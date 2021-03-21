import React from "react";
import Experience from "../components/knowledges/Experience";
import Hobies from "../components/knowledges/Hobies";
import Languages from "../components/knowledges/Languages";
import OtherSkills from "../components/knowledges/OtherSkills";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent ">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobies />
      </div>
    </div>
  );
};

export default Knowledges;
