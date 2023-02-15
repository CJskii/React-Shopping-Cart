import React from "react";
import FeaturedItems from "./Featured";

const Shop = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src="/images/carousel/item1.jpg" alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
