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
        delayChildren: 2,
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
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };
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
        <motion.ul
          className={styles.navMenu}
          variants={animateNavbar}
          initial="hidden"
          animate="visible"
        >
          <motion.li className={styles.navItem} variants={animateNavItem}>
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
