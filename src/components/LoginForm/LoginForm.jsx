import React, { useState } from "react";
import css from "./styles.module.css";
import svg from '../../assets/sprite/sprite.svg'
const LoginForm = ({ onClose }) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const showPass = () => {
    setIsShowPass(!isShowPass);
  };

  return (
    <div className={css.formWrapper}>
      <button className={css.closeBtn} onClick={onClose}>
        <svg width={32} height={32}>
          <use href={`${svg}#icon-x`} />
        </svg>
      </button>
      <form>
        <p className={css.formTitle}>Log In</p>
        <p className={css.formText}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </p>
        <label>
          <input autoFocus placeholder="Email" type="email" />
        </label>
        <label>
          <input
            placeholder="Password"
            type={isShowPass ? "text" : "password"}
          />
          <button className={css.showPassBtn} onClick={showPass} type="button">
            <svg  width={20} height={20} >
              <use href={isShowPass ? `${svg}#eye` : `${svg}#eye-off`} />
            </svg>
          </button>
        </label>
        <button className={css.formSubBtn}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
