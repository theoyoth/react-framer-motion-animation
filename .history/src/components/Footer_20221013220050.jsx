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
          <a href="#">
            <FiInstagram className={styles.icon} />
          </a>
          <a href="#">
            <FiTwitter className={styles.icon} />
          </a>
          <a href="#">
            <FiFacebook className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
