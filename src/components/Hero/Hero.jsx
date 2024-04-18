import React from "react";
import css from "./styles.module.css";
import svg from "../../assets/sprite/sprite.svg";
const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroWrapper}>
        <h1 className={css.heroTitle}>
          The road to the <span>depths</span> of the human soul
        </h1>
        <p className={css.heroDescription}>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        {/* <img srcSet={require("../../assets/hero-girl@1x.jpeg")} alt="girl" width={464} height={526} /> */}
        <button className={css.heroBtn}>
          Get started{" "}
          <svg width={18} height={14}>
            <use href={`${svg}#icon-arrow`} />
          </svg>
        </button>
      </div>
      <div className={css.imageWrapper}>
        <picture className={css.heroImg}>
          <source
            srcSet={require("../../assets/hero-girl@1x.jpeg")}
            media={"(max-resolution: 191dpi)"}
          />
          <source
            srcSet={require("../../assets/hero-girl@2x.jpeg")}
            media={"(min-resolution: 192dpi)"}
          />
          <img
            src="../../assets/hero-girl@1x.jpeg"
            alt="girl"
            width={464}
            height={526}
          />
        </picture>
        <span className={css.usersIconWrapper}>
          <svg style={{ fill: "red" }} width={20} height={20}>
            <use href={`${svg}#icon-users`} />
          </svg>
        </span>
        <span className={css.questionIconWrapper}>
          <svg style={{ fill: "red" }} width={10} height={17}>
            <use href={`${svg}#icon-question`} />
          </svg>
        </span>
        <div  className={css.checkIconBox}>
         <span className={css.checkSvg}>
            <svg style={css.checkIconBoxSvg} width={20} height={20}>
              <use href={`${svg}#icon-check`} />
            </svg>
         </span>
         <div className={css.checkIconBoxText}>
            <span>Experienced psychologists</span>
            <span className={css.quantity}>15,000</span>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
