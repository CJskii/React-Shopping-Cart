import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const arr = [
      { id: "1", name: "ASIC Miners", source: "/images/btc-mining.png" },
      { id: "2", name: "Graphic Cards", source: "/images/gpucat.jpg" },
      { id: "3", name: "Crypto Gadgets", source: "/images/asiccat.png" },
    ];
    setCategories(arr);
  }, []);
  return categories.map((cat, index) => {
    const liClassName =
      cat.name === "ASIC Miners"
        ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
        : "";

    return (
      <li data-testid="category" key={index} className={liClassName}>
        <Link className="relative block group" to={`/products/${cat.name}`}>
          <img
            src={cat.source}
            alt={cat.name}
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
            style={{ objectFit: "cover" }}
          />

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white bg-black p-2">
              {cat.name}
            </h3>

            <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Shop Now
            </span>
          </div>
        </Link>
      </li>
    );
  });
};

export default Category;
