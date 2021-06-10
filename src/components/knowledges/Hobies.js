import React from "react";

const Hobies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>
        </li>
        <li className="hobby">
        <i className="fas fa-laptop"></i>
         <span>Apprendre des nouvelles technos</span>
        </li>
       
        <li className="hobby">
          <i className="fas fa-book-reader"></i>
          <span>Lecture</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobies;
