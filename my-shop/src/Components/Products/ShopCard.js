import React from "react";
import "../../Styles/ShopCard.css";
import { Link } from "react-router-dom";

const ShopCard = (props) => {
  const item = props.item;
  return (
    <div
      data-testid="card"
      className="card w-96 bg-base-200 shadow-xl border-2 border-accent max-sm:mr-2"
    >
      <figure className="h-full">
        <img
          src={item.source}
          alt={item.name}
          className="h-full w-full object-cover max-sm:w-50"
        />
      </figure>
      <div className="card-body border-t-2 border-accent ">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-between">
          <Link to={`/products/${props.name}/${item.name}`}>
            <button className="btn btn-primary">More details</button>
          </Link>
          <button
            className="btn btn-primary"
            onClick={(item) => {
              props.addItem(props.item, 1);
            }}
          >
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
