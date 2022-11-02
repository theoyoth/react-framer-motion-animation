import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src="./images/" alt="" />
        </div>
        <ul className={styles.navMenu}>
          <li className={styles.navItem}>HOME</li>
          <li className={styles.navItem}>PRODUCT</li>
          <li className={styles.navItem}>ABOUT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
