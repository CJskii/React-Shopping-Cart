import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../../FakeDatabase/data";
import ShopCard from "../ShopCard";
import fetchCategoryData from "../../../FakeDatabase/categoryData";

const CategoryItems = () => {
  const { name } = useParams();

  const [itemData, setItemData] = useState([]);
  const [category, setCategory] = useState({});

  useEffect(() => {
    const data = fetchData(name);
    const catData = fetchCategoryData(name);
    setItemData(data);
    setCategory(catData);
  }, [name]);

  return (
    <div className="flex flex-col justify-center items-center flex-wrap min-w-screen bg-base-200">
      <div className="lg:py-24 p-4 category-text w-4/5">
        <h2 className="text-3xl font-bold sm:text-4xl">{name}</h2>
        <p className="mt-4 text-gray-600">{category.description}</p>
      </div>
      <div className="min-w-screen flex flex-wrap justify-center items-center gap-4 max-sm:gap-y-2 max-sm:justify-center pb-8">
        {itemData.map((item, index) => {
          return <ShopCard key={index} item={item} name={name} />;
        })}
      </div>
    </div>
  );
};

export default CategoryItems;
