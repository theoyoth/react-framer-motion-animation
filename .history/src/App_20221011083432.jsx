import { motion } from "framer-motion";
import "./App.css";

function App() {
  const fadeAway = {
    enter: {
      opacity: 0,
    },
    animate: {},
    exit: {},
  };
  return (
    <motion.div className="App" variants={fadeAway}>
      <h1>Hello world</h1>
    </motion.div>
  );
}

export default App;
