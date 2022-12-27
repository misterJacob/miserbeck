import React from "react";
import { Outlet } from "react-router-dom";

const Projects = () => {

  return (
    <>
      <div className="project-wrapper">
        <div className="outlet-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Projects;
