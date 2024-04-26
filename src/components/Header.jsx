import React from "react";
import { NavLink } from "react-router-dom";
import header from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <header className={header.header}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${header.link} ${header.active}` : header.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/editor"
          className={({ isActive }) =>
            isActive ? `${header.link} ${header.active}` : header.link
          }
        >
          Write new post
        </NavLink>
      </header>
    </div>
  );
}

export default Header;
