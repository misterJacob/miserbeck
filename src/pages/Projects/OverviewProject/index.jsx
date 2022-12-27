import React from "react";
import OverviewElement from "../../../components/OverviewElement";
import { dataInput } from "../../../components/data/dataInput";


const OverviewProject = () => {
    // console.log(dataInput);
    return (
      <div className="overview-container__project">
        {dataInput[2].children.map((item, index) => (
              <OverviewElement item={item} key={index} />
        ))}
      </div>
    );
};

export default OverviewProject;
