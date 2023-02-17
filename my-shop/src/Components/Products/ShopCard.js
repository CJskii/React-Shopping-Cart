import React from "react";
import "../../Styles/ShopCard.css";

const ShopCard = (props) => {
  const item = props.item;
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure className="h-full">
        <img
          src={item.source}
          alt={item.name}
          className="h-full w-full object-cover max-sm:w-50"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
