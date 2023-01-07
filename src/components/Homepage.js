import React from "react";
import "../css/home-page.css";
import "../css/fossil-theme.css";
import "../css/image-carousel.css";
import ImageCarousel from "./ImageCarousel";
import paleo from "../assets/paleo.png";

class Homepage extends React.Component {
  render() {
    return (
      <div className="fossil-theme">
        <header>{/* navigation menu goes here */}</header>
        <main className="page-content">
          <div className="container">
            <h1>Welcome to Tierra</h1>
            <p>This is the homepage of my Fossil & Mineral app.</p>
            <ImageCarousel images={[{ src: paleo, caption: "Fossil" }]} />
            <section>{/* first text body goes here */}</section>
            <section>{/* second text body goes here */}</section>
            <section>{/* third text body goes here */}</section>
            <section>{/* fourth text body goes here */}</section>
          </div>
        </main>
        <footer>{/* footer content goes here */}</footer>
      </div>
    );
  }
}

export default Homepage;
