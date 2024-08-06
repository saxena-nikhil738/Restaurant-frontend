import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-parent">
      <div className="header">
        <div className="logo">
          <span>F</span>OODIE<span>D</span>ELIGHT
        </div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="/">Home</a>
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
              <a href="/manage">Manage Restaurants</a>
              {/* <Link to="/m">Manage Restaurants</Link> */}
            </li>
            <li>
              <a href="/signout">Signout</a>
              {/* <Link to="/s">Signout</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
