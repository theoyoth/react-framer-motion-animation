import styles from "./content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imglogo}>
        <img
          src="./images/nike-logo.png"
          alt="nike's logo"
          className={styles.nikeLogo}
        />
      </div>
      <div className={styles.mainContent}>Hello world</div>
    </div>
  );
};

export default Content;
