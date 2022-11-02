import { motion } from "framer-motion";

import styles from "./navbar.module.css";

const Navbar = () => {
  const animateNavbar = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      className={styles.navbar}
      initial={{ opacity: 0 }}
      animate={{ staggerChildren: 0.5 }}
    >
      <motion.nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="./images/logo.png" alt="logo" className={styles.logoImg} />
        </div>
        <motion.ul className={styles.navMenu}>
          <li className={styles.navItem}>
            <a href="#">HOME</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">PRODUCT</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">ABOUT</a>
          </li>
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
};

export default Navbar;
