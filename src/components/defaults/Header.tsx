import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import { Cart, LocationIcon, UserIcon } from "../svgs/Icons";
import Hamburger from "hamburger-react";
import Drawer from "./Drawer";
import { supabase } from "../../../utils/supabaseClient";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromHome, setFromHome] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [name, setName] = useState("");

  const handleClick = (tab: string) => {
    setIsOpen(true);
    setActiveTab(tab);

    if (tab === "signup") {
      setFromHome(true);
    } else {
      setFromHome(false);
    }
  };
  // localStorage.removeItem("id")

  const id = localStorage.getItem("id");

  const getUsername = async () => {
    const { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("userId", id);

    if (!error) {
      setName(user[0]?.name);
    }
  };

  getUsername();

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div className="bg-[#6eb356] text-[#fff] w-[100%] pt-3 pb-10">
        <div className="w-[80vw] mx-auto flex justify-between">
          <h2 className="text-[18px] font-semibold">Welcome to our Store{`, ${name}`}</h2>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>divwis@support.com</span>
            </div>
            <span className="font-bold">|</span>
            <div className="flex items-center space-x-2">
              <FaLocationDot />
              <span>Chester, UK</span>
            </div>
            {!id && <span className="font-bold">|</span>}
            <div
              className={`flex items-center space-x-4 ${
                id ? "lg:space-x-4 cursor-pointer" : "lg:space-x-8"
              } text-[16px]`}
            >
              {!id && (
                <div className="flex lg:space-x-3 space-x-2">
                  <span
                    className="font-bold cursor-pointer"
                    onClick={() => handleClick("login")}
                  >
                    Login
                  </span>
                  <span>|</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => handleClick("signup")}
                  >
                    Sign up Now
                  </span>
                </div>
              )}
              <div className="block lg:hidden z-50">
                <Hamburger
                  size={20}
                  toggled={openDrawer}
                  toggle={setOpenDrawer}
                  color="#19483a"
                />
              </div>
            </div>
          </div>
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

      {openDrawer && <Drawer />}
    </>
  );
};

export default Header;
