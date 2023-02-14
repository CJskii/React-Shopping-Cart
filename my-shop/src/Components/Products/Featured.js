import React from "react";

const FeaturedItems = () => {
  return (
    <div className="featured-container text-white flex flex-col justify-center items-center">
      <p>Featured items</p>
      <div className="featured-items flex justify-center items-center gap-4">
        <p>Item 1</p>
        <p>Item 2</p>
        <p>Item 3</p>
      </div>
    </div>
  );
};

export default FeaturedItems;
