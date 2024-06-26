import React, { useEffect } from "react";
import css from "./styles.module.css";
import ModalPortal from "../ModalPortal/ModalPortal";
const Backdrop = ({ children, onClose }) => {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      return;
    }
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  return (
    <ModalPortal>
      <div onClick={closeModal} className={css.backdrop}>
        {children}
      </div>
    </ModalPortal>
  );
};

export default Backdrop;
