import { motion } from "framer-motion";
import styles from "./content.module.css";

const Content = () => {
  const animateMainContent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
      },
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgLogo}>
        <img
          src="./images/nike-logo.png"
          alt="nike's logo"
          className={styles.nikeLogo}
        />
      </div>
      <div
        className={styles.mainContent}
        variants={animateMainContent}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.title}>
          <h1>
            MERCURIAL
            <br />
            SUPERFLY
            <br />
            CR7
          </h1>
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
