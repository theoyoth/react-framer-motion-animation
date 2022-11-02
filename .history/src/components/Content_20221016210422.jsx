import { motion } from "framer-motion";
import styles from "./content.module.css";

const Content = () => {
  const animateTitle = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    enter: {
      opacity: 1,
      y: 0,
      skewX: -6,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  const animateShoe = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
        delay: 1,
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
        <motion.div variants={animateTitle} initial="hidden" animate="enter">
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
          animate="enter"
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
