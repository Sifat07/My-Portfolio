import Link from "next/link";
import router from "next/router";
import React from "react";
import { Logo } from "./Logo";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoLink}>
        <Logo />
      </Link>

      <div className={styles.navMenu}>
        <Link href="/work" className={styles.navLink}>Work</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </div>
    </div>
  );
};

export default Nav;
