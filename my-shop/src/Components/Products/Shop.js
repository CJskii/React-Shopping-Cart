import React from "react";
import FeaturedItems from "./Featured";
import Categories from "./Categories";

const Shop = () => {
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center items-start gap-4">
      {/* <Categories />
      <FeaturedItems /> */}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-base-content sm:text-3xl">
              New Arrivals
            </h2>

            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Explore our range of high power ASIC miners, graphic cards and
              cool crypto gadgets!
            </p>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <a href="#" className="relative block group">
                <img
                  src="/images/gpucat.jpg"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                  style={{ objectFit: "cover" }}
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white bg-black p-2">
                    Graphic Cards
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="relative block group">
                <img
                  src="/images/asiccat.png"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white bg-black p-2">
                    Crypto Gadgets
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" className="relative block group">
                <img
                  src="/images/btc-mining.png"
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white  bg-black p-2 rounded">
                    ASIC miners
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard /> */}
    </div>
  );
};

export default Shop;
