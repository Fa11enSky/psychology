import React from "react";
import svg from "../../assets/sprite/sprite.svg";
import css from "./styles.module.css";
import handleSignOut from "../../services/logOut";
import { auth } from "../../config/firebaseConfig";
const UserMenu = () => {
  const user = auth.currentUser?.displayName
  return (
    <div className={css.userMenu}>
      <span className={css.iconWrapper}>
        <svg width={16} height={16}>
          <use href={`${svg}#icon-user`} />
        </svg>
      </span>
      <span>{ user||'user'}</span>
      <button onClick={handleSignOut} className={css.logOut}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
