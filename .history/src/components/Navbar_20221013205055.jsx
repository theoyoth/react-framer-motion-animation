import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class={styles.logo}></div>
        <ul class={styles.navMenu}>
          <li class={styles.navItem}>HOME</li>
          <li class={styles.navItem}>PRODUCT</li>
          <li class={styles.navItem}>ABOUT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
