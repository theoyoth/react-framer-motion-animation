import { motion } from "framer-motion";
import "./App.css";

function App() {
  const fadeAway = {
    enter: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <motion.div
      className="App"
      variants={fadeAway}
      initial="enter"
      animate="animate"
      exit="exit"
    >
      <h1>Hello world</h1>
    </motion.div>
  );
}

export default App;
