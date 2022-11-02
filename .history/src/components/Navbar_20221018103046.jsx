import { motion } from "framer-motion";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="./images/logo.png" alt="logo" className={styles.logoImg} />
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#">HOME</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">PRODUCT</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">ABOUT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
