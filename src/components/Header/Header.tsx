import React from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./styles.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <Link className={css.logo} to={"/"}>
          <span>psychologists.</span>services
        </Link>
        <ul className={css.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"psychologists"}>Psychologists</NavLink>
          </li>
        </ul>
      </nav>
      <ul className={css.headerBtnList}>
        <li>
          <button className={css.login}>Log In</button>
        </li>
        <li>
          <button className={css.register}>Registration</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
