import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { dataInput } from "../../../components/data/dataInput"
// import { dataSlides } from "../data.slider";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const SliderDisplay = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(1);
  const [showphoto, setShowphoto] = useState(false);

  const dataSlides = dataInput[1].children;
  let Slider = dataSlides[id - 1].children;

  const nextSlide = () => {
    if (slideIndex !== Slider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Slider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Slider.length);
    }
  };

  const toggleShowPhoto = () => {
    setShowphoto((prevShowphoto) => !prevShowphoto);
  };

  return (
    <>
      <div className={showphoto ? "photo-slider-display show" : "photo-slider-display"}>
        {dataSlides[id - 1].children.map((item, index) => {
          return (
            <div
              className={
                slideIndex === index + 1
                  ? "photo-slide-item active"
                  : "photo-slide-item"
              }
              key={index}
            >
              <img
                src={`../assets/images/sliderImages/${item.path}/${item.image}`}
                alt={item.title}
                className="slide-image-background"
              />

              <img
                src={`../assets/images/sliderImages/${item.path}/${item.image}`}
                alt={item.title}
                onClick={toggleShowPhoto}
                className="slide-image"
              />
            </div>
          );
        })}
        <FaArrowAltCircleLeft
          className={showphoto ? "btn-slide prev" : "btn-slide prev"}
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className={showphoto ? "btn-slide next" : "btn-slide next"}
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default SliderDisplay;
