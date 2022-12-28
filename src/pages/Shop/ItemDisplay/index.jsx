import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ShopData } from "../../../components/data/shop.data";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ItemDisplay = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(1);
  const [showphoto, setShowphoto] = useState(false);

  let Slider = ShopData[id - 1].slider;

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
      <div
        className={
          showphoto ? "shop-slider-display  show" : "shop-slider-display"
        }
      >
        {ShopData[id - 1].slider.map((item, index) => {
        return (
          <div
          className={
            slideIndex === index + 1
            ? "Shop_items_display active"
            : "Shop_items_display "
          }
          key={item.id}
          >
            <div
              className={
                showphoto
                ? "item-image-background-cover show"
                : "item-image-background-cover"
              }
            >
            <h1 className="item-title">{ShopData[id - 1].item}</h1>
              <img
                src={` ../assets/images/shop-images/${item.image}`}
                alt={item.title}
                className="shop-item_image-background"
              />

            <img
              src={` ../assets/images/shop-images/${item.image}`}
              onClick={toggleShowPhoto}
              alt={item.alt}
              className="shop-item_image"
              key={index}
              />
              </div>
            <div className="description-card">
              <p className="item-price">
                {ShopData[id - 1].price} {ShopData[id - 1].currency}
              </p>
              <p className="item-description">
                Condition :{ShopData[id - 1].condition}
              </p>
            </div>
          </div>
        );
      })}
      <FaArrowAltCircleLeft className={ showphoto ? "btn-slide show prev" : "btn-slide prev"} onClick={prevSlide} />
      <FaArrowAltCircleRight className={ showphoto ? "btn-slide show next" : "btn-slide next"} onClick={nextSlide} />
      </div>
    </>
  );
};

export default ItemDisplay;
