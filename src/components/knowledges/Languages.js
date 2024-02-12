import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Java", xp: 2 },
      { id: 1, value: "Php", xp: 3 },
      { id: 2, value: "Javascript", xp: 3 },
      { id: 3, value: "Css", xp: 3 },
    ],
    framworks: [
      { id: 1, value: "Symfony", xp: 3 },
      { id: 2, value: "Apiplatform", xp: 2 },
      { id: 3, value: "React", xp: 3 },
      { id: 5, value: "SpringBoot", xp: 2},
      { id: 6, value: "Angular", xp: 1 },
    ],
  };
  render() {
    let { languages, framworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar
          languages={framworks}
          title="frameworks & bibliothèques"
          className="frameworkDisplay"
        />
      </div>
    );
  }
}

export default Languages;
