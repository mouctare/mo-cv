import React from "react";

const Hobies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Running</span>
        </li>
        <li className="hobby">
        <i className="fas fa-laptop"></i>
         <span>Apprendre des nouvelles technos</span>
        </li>
       
        <li className="hobby">
        <i className="fas fa-biking"></i>
          <span>VTT</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobies;
