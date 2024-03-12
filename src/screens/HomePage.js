import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import BestProduct from "../components/BestProduct";
import FeaturedProducts from "../components/FeaturedProducts";
import StatsSection from "../components/StatsSection";
import ReviewSection from "../components/ReviewSection";
import Sponsored from "../components/Sponsored";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <HeroSection />
      <BestProduct />
      <FeaturedProducts />
      <StatsSection />
      <ReviewSection />
      <Sponsored />
    </div>
  );
};

export default HomePage;
