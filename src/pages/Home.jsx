import React from "react";

import heroBackgrund from "../assets/Clothing.png";
import CetagurisList from "../components/CetagurisList";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div
        className="hero min-h-[calc(100vh-93px)]"
        style={{
          backgroundImage: `url(${heroBackgrund})`
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
              I Grow By Helping People In Need
            </h1>
            <label className="input input-bordered outline outline-[#FF444A] flex items-center bg-transparent  gap-2">
              <input type="text" className="grow bg-transparent text-white" placeholder="Search" />
              <span className="rounded-md text-black cursor-pointer bg-[#FF444A] p-2">Search</span>
            </label>
          </div>
        </div>
      </div>
      <CetagurisList />
    </div>
  );
};

export default Home;
