import React from "react";
import Banner from "../Banner/Banner";
import BestTop from "../BestTop/BestTop";
import Offerings from "../Offerings/Offerings";
import Subscribe from "../Subscribe/Subscribe";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Offerings></Offerings>
      <BestTop></BestTop>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
