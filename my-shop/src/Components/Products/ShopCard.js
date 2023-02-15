import React from "react";

const ShopCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="h-full">
        <img
          src={props.source}
          alt="Shoes"
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          GeForce RTX 4080 ROG Strix OC 16GB GDDR6X
        </h2>
        <p>
          Delivers the ultra performance and features that enthusiast gamers and
          creators demand.
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
