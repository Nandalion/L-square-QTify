import React from "react";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left - Logo */}
      <div className={styles.logo}>
        <Logo />
        {/* <span className={styles.logoText}>tify</span> */}
      </div>

      {/* Center - Search */}
      <div className={styles.searchWrapper}>
        <Search placeholder="Search a album of your choice" />
      </div>

      {/* Right - Button */}
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
