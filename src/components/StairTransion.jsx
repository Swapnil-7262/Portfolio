import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Stairs from "./Stairs"; // Make sure you have this component

const StairTransition = () => {
  const location = useLocation(); // React Router equivalent of usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="fixed top-0 left-0 w-screen h-screen z-40 pointer-events-none">
        <div className="h-full w-full flex">
          <Stairs />
        </div>
        <motion.div
          className="h-full w-full bg-primary absolute top-0 left-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }}
          exit={{ opacity: 0 }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
