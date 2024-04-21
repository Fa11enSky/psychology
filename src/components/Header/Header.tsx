import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./styles.module.css";
import Backdrop from "../Backdrop/Backdrop";
import AuthForm from "../LoginForm/AuthForm";
import { auth } from "../../config/firebaseConfig";
import UserMenu from "../UserMenu/UserMenu";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Встановлюємо isLoggedIn в true, якщо user існує
    });

    return () => unsubscribe();
  }, []);
  const modalToggle = (): void => {
    setIsModalOpen(!isModalOpen);
  };

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
         {isLoggedIn&& <li>
            <NavLink to={"favorites"}>Favorites</NavLink>
          </li>}
        </ul>
      </nav>
      {!isLoggedIn && (
        <ul className={css.headerBtnList}>
          <li>
            <button
              onClick={() => {
                setIsRegister(false);
                modalToggle();
              }}
              className={css.login}
            >
              Log In
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setIsRegister(true);
                modalToggle();
              }}
              className={css.register}
            >
              Registration
            </button>
          </li>
        </ul>
      )}
      {isLoggedIn&&<UserMenu/>}
      {isModalOpen && (
        <Backdrop onClose={modalToggle}>
          <AuthForm onClose={modalToggle} isRegister={isRegister} />
        </Backdrop>
      )}
    </header>
  );
};

export default Header;
