import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  return (
    <div className="container">
      <section className="sidebar-topics">
        <NavLink exact to="/" className="item" activeClassName="active">
          <span>Home</span>
        </NavLink>
      </section>

      {/* Footer on mobile */}
      <section className="sidebar-mobile">
        <NavLink exact to="/" className="item" activeClassName="active">
          <FontAwesomeIcon className="icon" icon={faHome} />
          <span>Home</span>
        </NavLink>
      </section>
    </div>
  );
};

export default Sidebar;
