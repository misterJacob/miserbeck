import React from "react";
import { useNavigate } from "react-router-dom";

const OverviewElement = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="overview-item-card"
        onClick={() => navigate(`../${props.item.id}`)}
      >
        <div className="overview-item-card-image">
        <img
          src={process.env.PUBLIC_URL + `/assets/images${props.item.path}/${props.item.image}`}
          alt={props.item.title}
        />
        </div>
        <div className="overview-item-card-title-wrap">
        <h2 className="overview-item-card-title">{props.item.title}</h2>
        </div>
      </div>
    </>
  );
};

export default OverviewElement;
