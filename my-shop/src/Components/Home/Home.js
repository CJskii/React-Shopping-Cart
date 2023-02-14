import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="container min-h-full min-w-full grid grid-cols-4 grid-rows-4 gap-4 p-4">
      <Header />
      <Carousel />
    </div>
  );
};

export default Home;
