import { motion } from "framer-motion";
import styles from "./content.module.css";

const Content = () => {
  const animation = {
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
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
        <motion.div variants={animation} initial="enter" animate="animate">
          <h1>
            MERCURIAL
            <br />
            SUPERFLY
            <br />
            CR7
          </h1>
        </motion.div>
        <div className={styles.crShoesContainer}>
          <img
            src="./images/cr7shoes.png"
            alt="cr7"
            className={styles.crShoes}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Content;
