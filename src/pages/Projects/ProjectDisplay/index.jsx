// import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { dataInput } from "../../../components/data/dataInput";


const ProjectDisplay = () => {
    const { id } = useParams()

  const Data = dataInput[2].children;
  return (
    <div className="project-container">
      {Data[id - 1].children.map((item, index) => {
        return (
          <div key={index} className="project-item-display">
            <div className="project-item-display-title">
              <h1 className="project-item-display-title-text">{item.title}</h1>
            </div>
            <div className="project-item-display-image-wrap">
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/images/${item.path}/${item.image}`
                }
                alt={item.title}
                className="project-item-display-image"
              />
            </div>
            <div className="project-item-display-description">
              <h3>Description :</h3>
              <p className="project-item-display-description-text">
                {item.description}
              </p>
              <div className="project-item-display-link">
                <p className="project-item-display-link-text">
                  Take a closer look at the project
                <a href={item.href} target="_blanc">
                  {item.href}
                </a>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectDisplay;
