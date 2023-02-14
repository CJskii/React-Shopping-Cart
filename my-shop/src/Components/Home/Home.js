import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container min-h-full min-w-full p-4 h-full">
      <section className="h-full">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 max-[375px]:py-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative overflow-hidden rounded-lg lg:order-last lg:h-full">
              <Carousel />
            </div>

            <div className="lg:py-24">
              <Header />
              <li className="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                <Link to="/products">Get Started</Link>
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
