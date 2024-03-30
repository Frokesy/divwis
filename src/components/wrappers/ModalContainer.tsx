import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalProps {
  children: ReactNode;
}

const ModalContainer: FC<ModalProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-[#000] z-50 bg-opacity-65 top-0 w-[100%] h-[100%] fixed flex justify-center items-center"
    >
      <div className="bg-[#fff] pb-10 px-6 rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default ModalContainer;
