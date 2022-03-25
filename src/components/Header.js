import React, { useState } from "react";

const Header = () => {
  const [state, setState] = useState({
    heading: "About Us",
    link1: "Home",
    link2: "About Us",
  });
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__content-h1">{state.heading}</div>
        <div className="header__content-links">
          <a href="">{state.link1}</a>
          <span className="header__content-span"></span>
          <a href="">{state.link2}</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
