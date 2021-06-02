import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Mamadou Mouctar Diallo</h1>
          <h2>Concepteur Développeur Web </h2>
        </div>
        <div className="pdf">
          <a href="./media/Mon_CV.pdf" target="_blank">
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
