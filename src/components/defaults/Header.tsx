import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Phone } from "../svgs/Icons";
import useAuthStore from "../../../store/authStore";

const Header = () => {
  const { isModalOpen, setIsModalOpen, user } = useAuthStore();
  const [fromHome, setFromHome] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("login");

  const handleClick = (tab: string) => {
    setIsModalOpen(true);
    setActiveTab(tab);

    if (tab === "signup") {
      setFromHome(true);
    } else {
      setFromHome(false);
    }
  };  

  return (
    <>
      <div className="bg-[#6eb356] text-[#fff] w-[100%] lg:block hidden pt-3 pb-10">
        <div className="w-[80vw] mx-auto flex justify-between">
          <h2 className="text-[16px] font-semibold">
            Welcome to our Store{user ? `, ${user.name}` : ', Guest.'}
          </h2>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>divwis@support.com</span>
            </div>
            <span className="font-bold">|</span>
            <div className="flex items-center space-x-2">
              <Phone />
              <span>+44 234 1721</span>
            </div>
            <span className="font-bold">|</span>
            <div className="flex items-center space-x-2">
              <FaLocationDot />
              <span>Chester, UK</span>
            </div>
            {!user && <span className="font-bold">|</span>}
            <div
              className={`flex items-center space-x-4 ${
                user ? "lg:space-x-4 cursor-pointer" : "lg:space-x-8"
              } text-[16px]`}
            >
              {!user && (
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
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <AuthModal
          activeTab={activeTab}
          fromHome={fromHome}
          setFromHome={setFromHome}
        />
      )}
    </>
  );
};

export default Header;
