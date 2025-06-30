import React from "react";
import styles from "./styles.module.css";

const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Spinner;
