import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Cancel } from "../svgs/Icons";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalContainer: FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-[#000] z-50 bg-opacity-65 top-0 w-[100%] h-[100%] fixed flex justify-center items-center"
    >
      <div className="bg-[#fff] pb-10 px-6 rounded-lg">
        <div className="flex justify-end py-6">
          <button
            className="flex cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Cancel />
          </button>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default ModalContainer;
