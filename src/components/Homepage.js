import React from "react";
import "../css/homepage.css";
import "../assets/paleo.png";

class Homepage extends React.Component {
  render() {
    return (
      <div className="paleontology-theme">
        <h1>Welcome to My Paleontology App</h1>
        <p>This is the homepage of my paleontology app.</p>
        <img src="../assets/paleo.png" alt="Fossil" />
      </div>
    );
  }
}

export default Homepage;
