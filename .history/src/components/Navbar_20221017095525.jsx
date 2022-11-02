import { motion } from "framer-motion";

import styles from "./navbar.module.css";

const Navbar = () => {
  const animateNavbar = {
    hidden: {
      opacity: 0,
    },
    enter: {
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
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  const animateLogo = {
    hidden: {
      scaleY: 1.5,
      scaleX: 1.5,
    },
    enter: {
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
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <motion.div className={styles.logo}>
          <motion.img
            src="./images/logo.png"
            alt="logo"
            className={styles.logoImg}
            variants={animateLogo}
            initial="hidden"
            animate="enter"
          />
        </motion.div>
        <motion.ul
          className={styles.navMenu}
          variants={animateNavbar}
          initial="hidden"
          animate="enter"
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
    </div>
  );
};

export default Navbar;