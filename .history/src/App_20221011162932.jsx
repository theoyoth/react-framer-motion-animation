import { motion } from "framer-motion";
import "./App.css";

function App() {
  const variant = {
    visible: {
      opacity: 1,
      x: 100,
      transition: {
        delay: 0.6,
        ease: "easeIn",
      },
    },
  };
  const fadeAway = {
    enter: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        ease: "linear",
      },
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <motion.div
      className="App"
      variants={variant}
      initial="enter"
      animate="animate"
      exit="exit"
    >
      <h1>Hello world</h1>
    </motion.div>
  );
}

export default App;
