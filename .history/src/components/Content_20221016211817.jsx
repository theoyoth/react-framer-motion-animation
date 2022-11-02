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
      transformOrigin: "top",
      scaleY: 1,
      transition: {
        ease: "easeIn",
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
        ease: "easeIn",
      },
    },
  };

  const animateContent = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        staggerChildren: 0.6,
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
      <motion.div
        className={styles.mainContent}
        variants={animateContent}
        initial="hidden"
        animate="enter"
      >
        <motion.div className={styles.title}>
          <h1>
            MERCURIAL
            <br />
            SUPERFLY
            <br />
            CR7
          </h1>
        </motion.div>
        <motion.div className={styles.crShoesContainer}>
          <img
            src="./images/cr7shoes.png"
            alt="cr7"
            className={styles.crShoes}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Content;