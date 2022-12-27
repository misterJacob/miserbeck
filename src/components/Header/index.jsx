import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import BurgerComponent from "../BurgerComponent";
import NavComponent from "../NavComponent";

const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 125) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [open, setOpen] = useState(false);
  const openBurger = () => {
    setOpen(!open);
  };
  const closeBurger = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={color ? "header transparent" : "header"}>
        <div className="logo">
          <img
            src="../../assets/images/images/jacob-header-foto.jpg"
            alt="MisterBeck"
          />
        </div>
        <NavLink to="/" className="title" onClick={closeBurger}>
          <h1>MisterBeck</h1>
        </NavLink>
        <NavComponent handleClick={closeBurger} open={open} />
        <BurgerComponent handleClick={openBurger} open={open} />
      </div>
      <Outlet />
    </>
  );
};

export default Header;
