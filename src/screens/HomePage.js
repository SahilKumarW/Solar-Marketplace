import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div style={{ border: "2px solid red" }}>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
};

export default HomePage;
