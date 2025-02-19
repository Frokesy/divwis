import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Cancel } from "../svgs/Icons";
import useAuthStore from "../../../store/authStore";

interface ModalProps {
  children: ReactNode;
}
const ModalContainer: FC<ModalProps> = ({ children }) => {
  const { isModalOpen, setIsModalOpen } = useAuthStore();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-[#000] z-50 bg-opacity-65 top-0 w-[100%] h-[100%] fixed flex justify-center items-center"
    >
      <div className="bg-[#fff] pb-10 lg:px-6 px-4 lg:h-auto max-h-[90vh] overflow-y-auto rounded-lg">
        <div className="flex justify-end py-6">
          <button
            className="flex cursor-pointer"
            onClick={() => setIsModalOpen(!isModalOpen)}
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
