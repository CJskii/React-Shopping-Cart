import React from "react";
import Category from "./Category/Category";

const Shop = () => {
  return (
    <div
      data-testid="shop"
      className="hero min-h-screen bg-base-200 flex justify-center items-start gap-4"
    >
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-base-content sm:text-3xl">
              New Arrivals
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Explore our range of high power ASIC miners, graphic cards and
              cool crypto gadgets!
            </p>
          </header>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <Category />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Shop;
