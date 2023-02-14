import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="container max-h-full min-w-full p-4">
      <Header />
      <Carousel />
    </div>
  );
};

export default Home;
