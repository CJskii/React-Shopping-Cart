import React from "react";

const FeaturedCard = (props) => {
  return (
    <div className="card featured-card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="feature-img" src={props.source} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.header}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
