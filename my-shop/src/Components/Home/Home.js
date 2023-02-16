import React from "react";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="hero bg-base-200 flex flex-col justify-center items-center">
      <div
        className="hero-content flex-col lg:flex-row-reverse mx-20 max-sm:mx-2"
        style={{ minHeight: "92vh" }}
      >
        <img
          className="mask mask-hexagon max-w-sm rounded-lg shadow-2xl h-96 max-sm:hidden"
          src="/images/hero.png"
          alt="hero"
        />
        <div>
          <h1 className="text-5xl max-sm:text-4xl font-bold">
            Dig deeper with CryptoCave!
          </h1>
          <p className="py-6 mr-16 max-sm:mr-2">
            Welcome to CryptoCave, where we specialize in providing the latest
            and greatest tools for all your crypto mining needs. Our store is
            your one-stop-shop for all things ASIC miners, GPUs, and crypto
            gadgets. Whether you're an experienced miner or just starting out,
            we have the equipment you need to take your mining game to the next
            level.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
