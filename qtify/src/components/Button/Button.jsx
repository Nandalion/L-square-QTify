import React from "react";
import styles from "./Button.module.css";

/**
 * Reusable Button component
 * @param {string} text - The text to display inside the button
 * @param {function} onClick - The callback when the button is clicked
 */
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
