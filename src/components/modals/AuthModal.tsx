import React, { FC, useState } from "react";
import Input from "../defaults/Input";
import gsap from "gsap";
import { Cancel } from "../svgs/Icons";
import { handleSignup } from "../../../utils/signupService";
import { handleLogin } from "../../../utils/loginService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../defaults/Loader";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab: string;
  fromHome: boolean;
  setFromHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModal: FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  activeTab,
  fromHome,
  setFromHome,
}) => {
  const [active, setActive] = useState(activeTab);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [loading, setLoading] = useState(false);

  const validateField = (value: string) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleToggle = (tab: string) => {
    const tl = gsap.timeline();
    if (tab === "signup") {
      tl.to(".otherInput", {
        y: 20,
        ease: "ease-in",
        duration: 0.3,
        onComplete: () => {
          setActive(tab);
        },
      });
      tl.fromTo(
        ".fadeInInput",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        }
      );
    }

    if (tab === "login") {
      setFromHome(false);
      tl.fromTo(
        ".fadeInInput",
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setActive(tab);
          },
        }
      );

      tl.to(".otherInput", {
        y: 0,
        ease: "ease-in",
        duration: 0.5,
        delay: 0.5,
      });
    }
  };

  const handleSubmit = async (activeTab: string) => {
    if (activeTab === "login") {
      await handleLogin(
        setLoading,
        validateField,
        userData,
        validatePassword,
        setError,
        isOpen,
        setIsOpen
      );
    } else if (activeTab === "signup") {
      await handleSignup(
        setLoading,
        validateField,
        userData,
        validatePassword,
        setError
      );
    }
  };
  return (
    <div className="bg-[#000] z-10 bg-opacity-65 absolute top-0 w-[100%] h-[100%] flex justify-center items-center">
      <ToastContainer />
      <div className="bg-[#fff] pb-10 px-6 lg:w-[30vw] w-[90vw] rounded-lg">
        <div className="flex justify-end py-6">
          <button
            className="flex cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Cancel />
          </button>
        </div>
        <div className="flex justify-evenly font-mono text-[18px] pb-4">
          <span
            className={`
            cursor-pointer login
              ${
                active === "login" &&
                "border-b border-[#19483a] text-[#19483a] font-bold"
              }
            `}
            onClick={() => handleToggle("login")}
          >
            Login
          </span>
          <span>|</span>
          <span
            className={`
            cursor-pointer signup
            ${
              active === "signup" &&
              "border-b border-[#19483a] text-[#19483a] font-bold"
            }
          `}
            onClick={() => handleToggle("signup")}
          >
            Sign Up
          </span>
        </div>
        <div className="flex flex-col">
          {active === "signup" && (
            <div className="fadeInInput">
              <Input
                label="Full name"
                type="text"
                value={userData.fullName}
                onChange={(e) =>
                  setUserData({ ...userData, fullName: e.target.value })
                }
                nameErr={error.fullName}
              />
            </div>
          )}
          <div
            className={`otherInput ${
              active === "signup" && !fromHome && "-mt-4"
            } ${active === "signup" && fromHome && "mt-0"}`}
          >
            <Input
              label="Email"
              type="text"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              emailErr={error.email}
            />
            <Input
              label="Password"
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              passwordErr={error.password}
            />
            <div className="flex justify-between mt-6 items-center">
              <span className="text-[13px] text-[#19483a]">
                Forgot password?
              </span>
              {active === "login" ? (
                <div className="">
                  {loading ? (
                    <button
                      onClick={() => handleSubmit("login")}
                      className="bg-[#19483a] text-[#fff] text-[14px] rounded-lg font-semibold px-8 py-1.5"
                    >
                      <Loader />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubmit("login")}
                      className="bg-[#19483a] text-[#fff] text-[14px] rounded-lg font-semibold px-8 py-1"
                    >
                      Login
                    </button>
                  )}
                </div>
              ) : (
                <div className="">
                  {loading ? (
                    <button
                      onClick={() => handleSubmit("login")}
                      className="bg-[#19483a] text-[#fff] text-[14px] rounded-lg font-semibold px-8 py-1.5"
                    >
                      <Loader />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSubmit("login")}
                      className="bg-[#19483a] text-[#fff] text-[14px] rounded-lg font-semibold px-8 py-1"
                    >
                      Signup
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
