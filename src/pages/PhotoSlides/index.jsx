import React from "react";
import { Outlet} from "react-router-dom";

const PhotoSlides = () => {

  return (
    <div className="photo-slider-container">
      
      <div className="slider-container">
        <Outlet />
      </div>
    </div>
  );
};

export default PhotoSlides;
