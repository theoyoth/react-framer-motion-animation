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
        staggerChildren: 0.7,
      },
    },
  };
  return (
    <motion.div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="./images/logo.png" alt="logo" className={styles.logoImg} />
        </div>
        <motion.ul
          className={styles.navMenu}
          variants={animateNavbar}
          initial="hidden"
          animate="enter"
        >
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
      </nav>
    </motion.div>
  );
};

export default Navbar;
