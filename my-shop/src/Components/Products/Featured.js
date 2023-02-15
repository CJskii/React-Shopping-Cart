import React, { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import "../../Styles/Shop.css";

const FeaturedItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const arr = [
      {
        path: "/images/gpu.jpg",
        header: "New RTX 4090 is released!",
        desc: "Click the button to view more product details",
      },
      {
        path: "/images/gpu.png",
        header: "New RTX 4080 is released!",
        desc: "Click The button to view more product details",
      },
      {
        path: "/images/miner2.png",
        header: "New RTX 4080 is released!",
        desc: "Click The button to view more product details",
      },
    ];
    setItems(arr);
  }, []);

  return (
    <div className="featured">
      <h1 className="text-center text-3xl p-4 m-8">Featured items</h1>
      <div className="flex justify-center items-center gap-4 p-4 flex-wrap">
        {items.map((item, index) => {
          return (
            <FeaturedCard
              key={index}
              source={items[index].path}
              header={items[index].header}
              desc={items[index].desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedItems;
