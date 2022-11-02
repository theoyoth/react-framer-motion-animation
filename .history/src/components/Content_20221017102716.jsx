import { motion } from "framer-motion";
import styles from "./content.module.css";

const Content = () => {
  const animateContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 2,
      },
    },
  };
  const animateTitle = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const animateShoe = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const animateMainContent = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
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
      <motion.div
        className={styles.mainContent}
        variants={animateMainContent}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.title} variants={animateTitle}>
          <h1>
            MERCURIAL
            <br />
            SUPERFLY
            <br />
            CR7
          </h1>
        </motion.div>
        <motion.div className={styles.crShoesContainer} variants={animateShoe}>
          <img
            src="./images/cr7shoes.png"
            alt="cr7"
            className={styles.crShoes}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Content;
