import React, { useState } from "react";
import { BiDownArrow as Arrow } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const SidebarItem = (props) => {
  const [open, setOpen] = useState(false);

  function closeContent() {
    props.handleClick();
    setOpen(!open);
  }

  if (props.item.children) {
    return (
      <>
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className="sidebar-item-title" onClick={() => setOpen(!open)}>
            <h3>{props.item.title}</h3>
            <Arrow className="arrow" />
          </div>
          <div className="sidebar-item-content">
            {open &&
              props.item.children.map((child, index) => (
                <NavLink
                  to={`../${props.item.path}/${child.id}`}
                  key={index}
                  className="sidebar-item-child"
                  onClick={closeContent}
                >
                  <div>{child.title}</div>
                </NavLink>
              ))}
          </div>
        </div>
        <div className="line children"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="sidebar-item simble" onClick={closeContent}>
          <NavLink to={props.item.path}>
            <h3>{props.item.title}</h3>
          </NavLink>
        </div>
        <div className="line simple"></div>
      </>
    );
  }
};

export default SidebarItem;
