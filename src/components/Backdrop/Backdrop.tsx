import React, { FC, MouseEvent, ReactNode, useEffect } from "react";
import css from "./styles.module.css";
import ModalPortal from "../ModalPortal/ModalPortal";

interface BackdropProps{
  onClose: () => void;
  children: ReactNode;
}
const Backdrop:FC<BackdropProps> = ({ children, onClose }) => {
  const closeModal = (e:MouseEvent):void => {
    if (e.target === e.currentTarget) {
      onClose();
      return;
    }
  };

  useEffect(() => {
    const handleKeydown = (e:KeyboardEvent) => {
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
