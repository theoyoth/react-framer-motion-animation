import styles from "./footer.module.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.copy}>
        <p>&copy;{date.getFullYear()} Theoyoth | All rights reserved</p>
      </div>
      <div className={styles.logoContainer}>
        <FiInstagram />
        <FiTwitter />
        <FiFacebook />
      </div>
    </div>
  );
};

export default Footer;
