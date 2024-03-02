import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import solar1 from "../Assets/solar1.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div
        className="hero-left"
        style={{
          backgroundImage: `url(${solar1})`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
