import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { NavData } from "./NavData";
import "./Navigation.css";

const Navigation = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="nav-container">
      <div
        style={{ width: isNavOpen ? "200px" : "50px" }}
        className="nav-container__sidebar"
      >
        <div className="nav-container__top">
          <h1
            style={{ display: isNavOpen ? "block" : "none" }}
            className="nav-container__logo"
          >
            Mail
          </h1>
          <div
            style={{ marginLeft: isNavOpen ? "50px" : "0px" }}
            className="nav-container__bars"
          >
            <FaIcons.FaBars onClick={toggleNav} />
          </div>
        </div>
        {NavData.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="nav-container__link"
            activeClassName="active"
          >
            <div className="nav-container__icon">{item.icon}</div>
            <div
              style={{ display: isNavOpen ? "block" : "none" }}
              className="nav-container__linkText"
            >
              {item.title}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="nav-container__main">{children}</div>
    </div>
  );
};

export default Navigation;
