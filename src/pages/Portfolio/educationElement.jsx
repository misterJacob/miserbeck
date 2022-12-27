import React, { useState } from "react";
// import { ImageShowStyled } from "./Portfolio.styled";

function Education(props) {
  const [isShown, setIsShown] = useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <li onClick={toggleShown}>
      {props.title && <h4>{props.title}</h4>}
      {props.title && <p>{props.description}</p>}
      {isShown && (
        <div className="image-show">
          {props.image && (
            <img
              src={`../assets/images/images/${props.image}`}
              alt={props.title}
            />
          )}
        </div>
      )}
    </li>
  );
}

export default Education;
