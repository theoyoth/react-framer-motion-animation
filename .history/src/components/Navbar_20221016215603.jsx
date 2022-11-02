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
  const animateLogo = {
    hidden: {
      x: -100,
      scaleY: 3,
      scaleX: 3,
    },
    enter: {
      x: 0,
      scaleX: 1,
      scaleY: 1,
      transition: {
        ease: "easeIn",
        duration: 0.6,
      },
    },
  };
  return (
    <motion.div className={styles.navbar}>
      <motion.nav className={styles.nav}>
        <motion.div className={styles.logo}>
          <motion.img
            src="./images/logo.png"
            alt="logo"
            className={styles.logoImg}
            variants={animateLogo}
            initial={hidden}
            animate={enter}
          />
        </motion.div>
        <motion.ul
          className={styles.navMenu}
          variants={animateNavbar}
          initial="hidden"
          animate="enter"
        >
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
