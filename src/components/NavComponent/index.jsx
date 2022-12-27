import React from "react";
import { NavLink} from "react-router-dom";
import { navData } from '../data/data.navComponent';


const NavComponent = (props) => {

  return (
    <nav className={props.open ? "navigation open" : "navigation"}>
      {navData.map((nav) => (
        <NavLink
          to={nav.path}
          className="nav-link-navigation"
          key={nav.id}
          onClick={props.handleClick}
        >
          <h3>{nav.title}</h3>
          <div className="underline-nav-item"></div>
        </NavLink>
      ))}
    </nav>
  );
}

export default NavComponent