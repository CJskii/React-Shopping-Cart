import React, { useState, useEffect } from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const arr = [
      { name: "ASIC Miners", path: "/images/asiccat.png" },
      { name: "Graphic Cards", path: "/images/gpucat.jpg" },
    ];
    setCategory(arr);
  }, []);

  return (
    <div className="categories">
      <h1 className="text-center text-3xl p-4 m-8">Explore categories</h1>
      <div className="flex justify-center items-center gap-6 p-4 flex-wrap">
        {category.map((item, index) => {
          return (
            <CategoriesCard
              key={index}
              source={category[index].path}
              name={category[index].name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
