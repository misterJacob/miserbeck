import React from 'react'

const BurgerComponent = (props) => {
  return (
    <div onClick={props.handleClick} className="burger-wrap">
      <div className={props.open ? "burger open" : "burger"}></div>
    </div>
  );
}

export default BurgerComponent