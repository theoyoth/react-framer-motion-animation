import styles from "./content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="./images/" alt="" />
      </div>
      <div className={styles.mainContent}>Hello world</div>
    </div>
  );
};

export default Content;
