import React, { useEffect, useState } from "react";
import "../../Styles/Main.css";

const Carousel = () => {
  const [displayItem, setDisplayItem] = useState([]);
  useEffect(() => {
    setDisplayItem("item1");
  }, []);

  const handleCarousel = (e) => {
    setDisplayItem(e.target.id);
  };

  return (
    <div className="carousel flex justify-center items-center">
      <div id="item1" className="carousel-item m-8 relative max-[320px]:hidden">
        <div className="carousel-bg">
          <img
            src={`/images/carousel/${displayItem}.jpg`}
            className="w-full carousel-item opacity-50"
          />
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <button
            id="item1"
            className="carousel-btn btn btn-xs text-white p-2"
            onClick={(e) => handleCarousel(e)}
          >
            1
          </button>
          <button
            id="item2"
            className="carousel-btn btn btn-xs text-white p-2"
            onClick={(e) => handleCarousel(e)}
          >
            2
          </button>
          <button
            id="item3"
            className="carousel-btn btn btn-xs text-white p-2"
            onClick={(e) => handleCarousel(e)}
          >
            3
          </button>
          <button
            id="item4"
            className="carousel-btn btn btn-xs text-white p-2"
            onClick={(e) => handleCarousel(e)}
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
