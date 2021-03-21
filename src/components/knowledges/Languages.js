import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Php", xp: 1.5 },
      { id: 2, value: "Javascript", xp: 1.3 },
      { id: 3, value: "Css", xp: 1.3 },
    ],
    framworks: [
      { id: 1, value: "Symfony", xp: 1.5 },
      { id: 1, value: "Apiplatform", xp: 1.5 },
      { id: 2, value: "React", xp: 1.4 },
      { id: 3, value: "Bootstap", xp: 1.3 },
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
