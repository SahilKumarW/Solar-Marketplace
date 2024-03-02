import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
};

export default HomePage;
