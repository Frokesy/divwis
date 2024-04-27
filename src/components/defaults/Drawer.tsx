import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import AuthModal from "../modals/AuthModal";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromHome, setFromHome] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const handleClick = (tab: string) => {
    setIsOpen(true);
    setActiveTab(tab);

    if (tab === "signup") {
      setFromHome(true);
    } else {
      setFromHome(false);
    }
  };
  return (
    <>
      <div className="fixed top-0 h-screen z-20 w-screen bg-[#000] bg-opacity-60">
        <div className="justify-end flex">
          <motion.div
            className="flex flex-col space-y-[30px] bg-[#ececec] h-screen w-[60%] pt-14 px-6 text-[18px] font-semibold text-[#42806e]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "ease", stiffness: 60 }}
          >
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to="/account">My Account</NavLink>
            <span>My Favorites</span>
            <NavLink to="/shops/0">Shop</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <div className="flex">
              <button
                onClick={() => handleClick("signup")}
                className="bg-[#19483A] text-[#fff] py-2 px-6 rounded-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {isOpen && (
        <AuthModal
          activeTab={activeTab}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          fromHome={fromHome}
          setFromHome={setFromHome}
        />
      )}
    </>
  );
};

export default Drawer;
