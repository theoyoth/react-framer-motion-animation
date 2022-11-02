import { motion } from "framer-motion";
import styles from "./content.module.css";

const Content = () => {
  const animateTitle = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transformOrigin: "top",
      scaleY: 1,
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
        delay: 0.7,
      },
    },
  };

  return (
    <motion.div className={styles.container}>
      <div className={styles.imgLogo}>
        <img
          src="./images/nike-logo.png"
          alt="nike's logo"
          className={styles.nikeLogo}
        />
      </div>
      <div className={styles.mainContent}>
        <motion.div
          className={styles.title}
          variants={animateTitle}
          initial="hidden"
          animate="visible"
        >
          <h1>
            MERCURIAL
            <br />
            SUPERFLY
            <br />
            CR7
          </h1>
        </motion.div>
        <motion.div
          className={styles.crShoesContainer}
          variants={animateShoe}
          initial="hidden"
          animate="visible"
        >
          <img
            src="./images/cr7shoes.png"
            alt="cr7"
            className={styles.crShoes}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Content;
