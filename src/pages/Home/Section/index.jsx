import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useElementOnScreen from "../../../hooks/useElementOnScreen";

const Section = (props) => {
  const targetRef = useRef(null);
  const isVisible = useElementOnScreen(
    {
      root: null,
      rootMargin: "-10px",
      threshold: 0.2,
    },
    targetRef
  );
  const sectionData = `data ${isVisible ? "show" : ""}`;
  const sectionImage = `img ${isVisible ? "show" : ""}`;
  // console.log(props.item.image);
  if (props.item.children) {
    return (
      <div
        className={
          props.item.id % 2 === 0
            ? "section-card-styled reverse"
            : "section-card-styled"
        }
        ref={targetRef}
      >
          <Link to={`${props.item.path}/overview`} className="nav-link">
          <div className={sectionData}>
            <h2>{props.item.title}</h2>
            <p> {props.item.description} </p>
          </div>
            </Link>
          <div className="image">
            <img
              className={sectionImage}
              src={`./assets/images/images/${props.item.image}`}
              alt=""
              />
          </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Section;
