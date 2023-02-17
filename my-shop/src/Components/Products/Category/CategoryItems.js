import React, { useEffect } from "react";

const CategoryItems = ({ match }) => {
  useEffect(() => {
    console.log(match);
  });
  return (
    <div>
      <h1>Bla bla bla</h1>
    </div>
  );
};

export default CategoryItems;
