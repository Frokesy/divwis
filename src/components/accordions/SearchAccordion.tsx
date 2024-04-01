import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const SearchAccordion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -ml-[260px] bg-[#fff] top-14 shadow-xl"
    >
      <div className="flex items-center input-field rounded-lg">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full border-none bg-inherit px-3 text-[14px] outline-none"
        />
        <div className="bg-[#ff7c08] p-4 rounded-r-lg">
          <FaSearch fill="#fff" />
        </div>
      </div>
    </motion.div>
  );
};

export default SearchAccordion;
