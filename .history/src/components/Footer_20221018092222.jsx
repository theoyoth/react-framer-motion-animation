import { motion } from "framer-motion";
import styles from "./footer.module.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.copy}>
          <p>&copy;{date.getFullYear()} Theoyoth | All rights reserved</p>
        </div>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.icon}>
            <FiInstagram />
          </a>
          <a href="#" className={styles.icon}>
            <FiTwitter />
          </a>
          <a href="#" className={styles.icon}>
            <FiFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
