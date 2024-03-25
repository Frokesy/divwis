import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}
const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
  );
};

export default PageTransition;
