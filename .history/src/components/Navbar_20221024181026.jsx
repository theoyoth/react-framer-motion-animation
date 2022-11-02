import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import styles from "./navbar.module.css";

const Navbar = () => {
  const animateNavbar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.4,
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
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };
  const containerNav = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
  };
  const animateLogo = {
    hidden: {
      scale: 1.4,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: "180deg",
      transition: { delay: 1.2, duration: 1 },
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
        <div className={styles.logo}>
          <motion.img
            src="./images/logo.png"
            alt="logo"
            className={styles.logoImg}
            variants={animateLogo}
            initial="hidden"
            animate="visible"
          />
        </div>
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
        <button className={styles.humburgerMenu}>
          <FiMenu className={styles.humburgerMenuIcon} />
        </button>
      </motion.nav>
    </div>
  );
};

export default Navbar;
