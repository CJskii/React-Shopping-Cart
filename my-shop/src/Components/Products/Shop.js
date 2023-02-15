import React from "react";
import FeaturedItems from "./Featured";
import Categories from "./Categories";

const Shop = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-start gap-4">
      <Categories />
      <FeaturedItems />

      {/* <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard /> */}
    </div>
  );
};

export default Shop;
