import styles from "./footer.module.css";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={footerContainer}>
      <div className={styles.copy}>
        <p>@2022 Theoyoth | All rights reserved</p>
      </div>
      <div>
        <FiInstagram />
        <FiTwitter />
        <FiFacebook />
      </div>
    </div>
  );
};

export default Footer;
