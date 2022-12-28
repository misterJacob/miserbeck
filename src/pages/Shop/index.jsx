import React from "react";
import { ShopData } from "../../components/data/shop.data";
import { useNavigate, Outlet } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  return (
    <div className="Shop_container">
      <div className="Shop_navigation">
        {ShopData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                navigate(`./${item.id} `);
              }}
              className="Shop_items"
            >
              <h4 className="item-title">{item.item} </h4>
              <img
                src={`../assets/images/shop-images/${item.image}`}
                alt={item.item}
                className="item_image"
              />
              <div className="description-card">
                <p>
                  {item.price} {item.currency}
                </p>
                <p>Condition :{item.condition}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Shop_image-slider-container">
          <Outlet />
      </div>
    </div>
  );
};

export default Shop;
