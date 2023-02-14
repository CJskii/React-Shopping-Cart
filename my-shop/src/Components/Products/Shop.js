import React from "react";
import FeaturedItems from "./Featured";

const Shop = () => {
  return (
    <div className="container min-h-full min-w-full grid grid-cols-2 grid-rows-2">
      <div className="text-white text-center text-5xl">Shop</div>;
      <FeaturedItems />
    </div>
  );
};

export default Shop;
