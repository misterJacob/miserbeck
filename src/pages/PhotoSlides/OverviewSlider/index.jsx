import React from "react";
import { useNavigate } from "react-router-dom";
import { dataInput } from "../../../components/data/dataInput";

const OverviewSlider = () => {
  const navigate = useNavigate();
  return (
    <div className="overview-container">
      {dataInput[1].children.map((slide, index) => {
        return (
          <div
            key={index}
            className="photo-slider-item"
            onClick={() => navigate(`../${slide.id}`)}
          >
            <img
              src={`../assets/images/sliderImages/${slide.path}/${slide.children[0].image}`}
              alt={slide.title}
            />
            <h2>{slide.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewSlider;
