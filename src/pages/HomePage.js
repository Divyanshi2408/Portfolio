import React, { useState, useEffect, useRef } from "react";
import SnakeGame from "../components/SnakeGame"; // Import SnakeGame component
import "./HomePage.css"; // Import styles
import d1 from "../Assets/images/d1.png"; // Replace with your actual image path
import Footer from "../components/Footer";
import AboutPage from "./AboutPage";
import Projects from "./Projects";
import Contact from "./Contact";

const HomePage = () => {
  const [showGame, setShowGame] = useState(true);
  const carouselRef = useRef(null);

  const handleSkip = () => {
    setShowGame(false);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    // Clone children for seamless scrolling
    if (carousel) {
      const images = Array.from(carousel.children);
      images.forEach((image) => {
        const clonedImage = image.cloneNode(true);
        clonedImage.setAttribute("aria-hidden", true);
        carousel.appendChild(clonedImage);
      });
    }
  }, []);

  return (
    <div>
    <div className="home-container">
      <div className="transparent-layer"></div>
      <div className="intro-section">
        <div className="self">
          <h4 className="short">Hi all, I am</h4>
          <h1 className="name">Divyanshi Pal </h1>
          <h3 className="role">Front-end Developer</h3>
        </div>
        <p className="github-link">
          Complete the game to continue
          <br />
          <br />
          You can also see it on my GitHub page
          <br />
          <a
            href="https://github.com/Divyanshi2408"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <p className="hide">// find my profile on Github:</p>
            <span className="con">const {" "}</span>
            <span className="gi">githubLink  ={" "}</span>
            <span className="glink">"https://github.com/Divyanshi2408";</span>
          </a>
        </p>
      </div>

      <div className="game-section">
        {showGame ? (
          <SnakeGame onSkip={handleSkip} />
        ) : (
          <div className="image-carousel">
            <div className="carousel-images" ref={carouselRef}>
              <img src={d1} alt="Code Example 1" className="carousel-image" />
              <img src={d1} alt="Code Example 2" className="carousel-image" />
              <img src={d1} alt="Code Example 3" className="carousel-image" />
              <img src={d1} alt="Code Example 4" className="carousel-image" />
              <img src={d1} alt="Code Example 5" className="carousel-image" />
            </div>
          </div>
        )}
      </div>
      </div>
      <h1 className="section">About Me</h1>
      <AboutPage/>
      <h1 className="section">Projects</h1>
      <Projects/>
      <h1 className="section">Contact</h1>
      <Contact/>
      </div>
   
  );
  
};

export default HomePage;
