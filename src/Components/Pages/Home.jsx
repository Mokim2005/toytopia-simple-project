import React, { use, useEffect } from "react";
import SliderBanner from "./SliderBanner";
import Banner from "../Banner";
import { useLoaderData } from "react-router";
import PopularToys from "./PopularToys";
import WelcomeBanner from "../WelcomeBanner";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

import Featured from "../Featured";


const Home = () => {

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 100, 
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <title>Home</title>
      <WelcomeBanner></WelcomeBanner>
      <Banner></Banner>
      <SliderBanner></SliderBanner>
    
      <div data-aos="fade-up">
        <h1 className="font-bold text-3xl md:text-5xl text-center my-5">
          Popular Toys
        </h1>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {data.map((toydata) => (
            <PopularToys toydata={toydata}></PopularToys>
          ))}
        </div>
      </div>
      <Featured></Featured>
    </div>
  );
};

export default Home;
