import { motion } from "framer-motion";
import { FaHeart, FaPowerOff, FaUser } from "react-icons/fa";

const UserAccordion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -ml-[180px] bg-[#fff] top-14 pl-4 py-4 shadow-xl"
    >
      <div className="flex flex-col space-y-4 w-[200px]">
        <div className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
          <FaUser />
          <h2>My Account</h2>
        </div>
        <div className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
          <FaHeart />
          <h2>My Favorites</h2>
        </div>
        <div className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
          <FaPowerOff />
          <h2>Sign Out</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default UserAccordion;
