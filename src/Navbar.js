import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
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
      <div className="nav-item-container">
        <NavLink activeClassName="selected" className="nav-item" to="/about">
          About
        </NavLink>
        <hr />
        <NavLink activeClassName="selected" className="nav-item" to="/projects">
          Projects
        </NavLink>
        <hr />

        <NavLink activeClassName="selected" className="nav-item" to="/contact">
          Contact
        </NavLink>
      </div>
    </Fragment>
  );
}

export default Navbar;
