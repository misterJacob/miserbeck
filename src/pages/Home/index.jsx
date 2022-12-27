import React from "react";
import Section from "./Section";
// import { Data } from "./data.home";
import { DataLanding } from "./data.landing";
import { dataInput } from "../../components/data/dataInput"
import Landing from "./Landing"
const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-container">
        {DataLanding.map((item, index) => (
          <Landing key={index} item={item} />
        ))}
      </div>
      <div className="main-section">
        {dataInput.map((item, index) => (
          <Section key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
