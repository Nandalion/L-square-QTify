import React from "react";
import LogoImage from "../../assets/Logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="Qtify Logo" className={styles.logoImg} />
      {/* <span className={styles.logoText}>tify</span> */}
    </div>
  );
}
