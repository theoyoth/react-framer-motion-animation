import styles from "./content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgLogo}>
        <img
          src="./images/nike-logo.png"
          alt="nike's logo"
          className={styles.nikeLogo}
        />
      </div>
      <div className={styles.mainContent}>
        <div>
          <h1>MERCURIAL<br>SUPERFLY CR7</h1>
        </div>
        <div>
          <img
            src="./images/cr7shoes.png"
            alt="cr7"
            className={styles.crShoes}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
