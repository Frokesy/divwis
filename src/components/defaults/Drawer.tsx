import { motion } from "framer-motion";

const Drawer = () => {
  return (
    <div className="fixed top-0 h-screen z-20 w-screen bg-[#000] bg-opacity-60">
      <div className="justify-end flex">
        <motion.div
          className="flex flex-col space-y-[30px] bg-[#ececec] h-screen w-[60%] pt-14 px-6 text-[18px] font-semibold text-[#42806e]"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "ease", stiffness: 60 }}
        >
          <span>Home</span>
          <span>About</span>
          <span>Blog</span>
          <span>FAQs</span>
          <div className="flex">
            <button className="bg-[#19483A] text-[#fff] py-2 px-6 rounded-lg">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Drawer;
