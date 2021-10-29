import React from "react";
import Banner from "../Banner/Banner";
import BestTop from "../BestTop/BestTop";
import Offerings from "../Offerings/Offerings";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offerings></Offerings>
      <BestTop></BestTop>
    </div>
  );
};

export default Home;
