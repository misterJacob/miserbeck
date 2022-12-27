import React from "react";
import { LandingInnerStyled } from "./Landing.styled";

const Landing = (
    { item: { author, quote, path } }
    // {item}
    ) => {
  return (
      <LandingInnerStyled className="inner-wrap">
        <a href={path} target="_blanc" className="link-landing">
          <h1>{author}</h1>
          <p>{quote}</p>
        </a>
      </LandingInnerStyled>
  );
};

export default Landing;
