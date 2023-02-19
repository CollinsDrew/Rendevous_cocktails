import React from "react";
import heroImg from "../Assets/cocktailBar.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroImg}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Rendevous Cocktail's
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quis necessitatibus atque quidem vitae omnis odit nulla, pariatur
            recusandae dignissimos corrupti reprehenderit ducimus ipsam, vel in
            corporis aspernatur a facilis.
          </p>
          {/* <Link to="contact">
            <button className="bg-white text-black ">Enquire Now</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
