import { motion } from "framer-motion";
import styles from "./navbar.module.css";

const Navbar = () => {
  const animateLogo = {
    hidden: {},
    visible: {},
  };
  return (
    <div className={styles.navbar}>
      <motion.nav className={styles.nav}>
        <div className={styles.logo}>
          <motion.img
            src="./images/logo.png"
            alt="logo"
            className={styles.logoImg}
          />
        </div>
        <motion.ul className={styles.navMenu}>
          <motion.li className={styles.navItem}>
            <a href="#">HOME</a>
          </motion.li>
          <motion.li className={styles.navItem}>
            <a href="#">PRODUCT</a>
          </motion.li>
          <motion.li className={styles.navItem}>
            <a href="#">ABOUT</a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
