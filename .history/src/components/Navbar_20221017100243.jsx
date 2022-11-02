import { motion } from "framer-motion";

import styles from "./navbar.module.css";

const Navbar = () => {
  const animateContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };
  const animateNavbar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };
  const animateNavItem = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.6,
      },
    },
  };
  const animateLogo = {
    hidden: {
      scaleY: 1.5,
      scaleX: 1.5,
    },
    visible: {
      scaleX: 1,
      scaleY: 1,
      rotate: "180deg",
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      className={styles.navbar}
      variants={animateContainer}
      initial="hidden"
      animate="visible"
    >
      <nav className={styles.nav}>
        <motion.div className={styles.logo}>
          <motion.img
            src="./images/logo.png"
            alt="logo"
            className={styles.logoImg}
            variants={animateLogo}
          />
        </motion.div>
        <motion.ul
          className={styles.navMenu}
          variants={animateNavbar}
          initial="hidden"
          animate="visible"
        >
          <motion.li className={styles.navItem} variants={animateNavItem}>
            <a href="#">HOME</a>
          </motion.li>
          <motion.li className={styles.navItem} variants={animateNavItem}>
            <a href="#">PRODUCT</a>
          </motion.li>
          <motion.li className={styles.navItem} variants={animateNavItem}>
            <a href="#">ABOUT</a>
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
