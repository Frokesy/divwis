import React, { FC, useState } from "react";
import Input from "../defaults/Input";
import gsap from "gsap";
import { handleSignup } from "../../../utils/signupService";
import { handleLogin } from "../../../utils/loginService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../defaults/Loader";
import ModalContainer from "../wrappers/ModalContainer";

interface ModalProps {
  activeTab: string;
  fromHome: boolean;
  setFromHome: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ErrorProps {
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
}

const AuthModal: FC<ModalProps> = ({ activeTab, fromHome, setFromHome }) => {
  const [active, setActive] = useState(activeTab);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });
  const [error, setError] = useState<ErrorProps>({
    email: "",
    password: "",
    fullName: "",
    phone: "",
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
        setError
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
    <ModalContainer>
      <ToastContainer />
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
            <div className="-mt-2">
              <Input
                label="Phone number"
                type="number"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                mobileNumbErr={error.phone}
              />
            </div>
          </div>
        )}
        <div
          className={`otherInput lg:w-[450px] w-[80vw] ${
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
            <span className="text-[13px] text-[#19483a]">Forgot password?</span>
            {active === "login" ? (
              <button
                onClick={() => handleSubmit("login")}
                className="bg-[#19483a] text-[#fff] text-[14px] h-[40px] w-[110px] rounded-lg font-semibold px-8 py-1.5"
              >
                {loading ? <Loader /> : "Login"}
              </button>
            ) : (
              <button
                onClick={() => handleSubmit("signup")}
                className="bg-[#19483a] text-[#fff] text-[14px] rounded-lg font-semibold px-8 py-1.5"
              >
                {loading ? <Loader /> : "Signup"}
              </button>
            )}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default AuthModal;
