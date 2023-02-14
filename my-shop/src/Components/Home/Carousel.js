import React, { useEffect, useState } from "react";
import "../../Styles/Main.css";

const Carousel = () => {
  const [itemStatus, setItemStatus] = useState([]);
  const [displayItem, setDisplayItem] = useState([]);
  useEffect(() => {
    setDisplayItem("item1");
  }, []);

  const handleCarousel = (e) => {
    const nextItem = e.target.id;
    console.log(nextItem);
    setDisplayItem(nextItem);
  };

  return (
    <div className="carousel">
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={`/images/carousel/${displayItem}.jpg`} className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <button
          id="item1"
          className="btn btn-xs text-white"
          onClick={(e) => handleCarousel(e)}
        >
          1
        </button>
        <button
          id="item2"
          className="btn btn-xs"
          onClick={(e) => handleCarousel(e)}
        >
          2
        </button>
        <button
          id="item3"
          className="btn btn-xs"
          onClick={(e) => handleCarousel(e)}
        >
          3
        </button>
        <button
          id="item4"
          className="btn btn-xs"
          onClick={(e) => handleCarousel(e)}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default Carousel;
