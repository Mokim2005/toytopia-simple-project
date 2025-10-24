import React from "react";
import SliderBanner from "./SliderBanner";
import Banner from "../Banner";
import { useLoaderData } from "react-router";
import PopularToys from "./PopularToys";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <title>Home</title>
      <Banner></Banner>
      <SliderBanner></SliderBanner>
      <div>
        <h1 className="font-bold text-3xl md:text-5xl text-center my-5">Popular Toys</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {data.map((toydata) => (
            <PopularToys toydata={toydata}></PopularToys>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
