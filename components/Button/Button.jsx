import React from "react";
import styles from "./styles.module.css";

const Button = ({ title, onClick, type = "DEFAULT", isDisabled = false }) => {
  return (
    <button
      disabled={isDisabled}
      className={`${styles.button} ${styles[type]} ${
        isDisabled && styles.disabled
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
