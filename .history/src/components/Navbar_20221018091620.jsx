import { motion } from "framer-motion";

import styles from "./navbar.module.css";

const Navbar = () => {
  const animateNavbar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.5,
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
  const containerNav = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
  };
  return (
    <div className={styles.navbar}>
      <motion.nav
        className={styles.nav}
        variants={containerNav}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.logo}>
          <motion.img
            src="./images/logo.png"
            alt="logo"
            className={styles.logoImg}
            variants={animateLogo}
            initial="hidden"
            animate="visible"
          />
        </motion.div>
        <motion.ul className={styles.navMenu} variants={animateNavbar}>
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
      </motion.nav>
    </div>
  );
};

export default Navbar;
