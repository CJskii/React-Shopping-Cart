import React from "react";

const CartDetails = (props) => {
  return (
    <div>
      {props.items.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <button onClick={() => props.removeItem(item)}>Remove</button>
            <p>{index}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CartDetails;
