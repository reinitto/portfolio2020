import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navbar({ history, setDirection, routes }) {
  const location = useLocation();
  const navLinks = Object.keys(routes).map((route) => routes[route].path);

  let navClick = (link) => {
    // calculate direction
    let nextDirection =
      navLinks.indexOf(link) - navLinks.indexOf(location.pathname);
    if (nextDirection < 0) {
      setDirection("left");
      history.push(link);
    }
    if (nextDirection > 0) {
      setDirection("right");
      history.push(link);
    }
  };

  let links = navLinks.map((link, i) => {
    if (i !== navLinks.length - 1) {
      return (
        <Fragment key={link}>
          <div
            className={`nav-item ${
              link === location.pathname ? "selected" : ""
            }`}
            onClick={() => navClick(link)}
          >
            {link.slice(1).toUpperCase()}
          </div>
          <hr />
        </Fragment>
      );
    } else {
      return (
        <div
          key={link}
          className={`nav-item ${link === location.pathname ? "selected" : ""}`}
          onClick={() => navClick(link)}
        >
          {link.slice(1).toUpperCase()}
        </div>
      );
    }
  });
  return (
    <Fragment>
      <div className="navbar">
        <div className="logo-container">
          <div className="logo">
            <span>R</span>
            ozensteins
          </div>
        </div>
      </div>
      <div className="nav-item-container">{links}</div>
    </Fragment>
  );
}

export default Navbar;
