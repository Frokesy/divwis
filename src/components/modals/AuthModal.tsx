import React, { FC, useState } from "react";
import Input from "../defaults/Input";
import gsap from "gsap";
import { Cancel } from "../svgs/Icons";

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

  return (
    <div className="bg-[#000] bg-opacity-65 absolute top-0 w-[100%] h-[100%] flex justify-center items-center">
      <div className="bg-[#fff] pb-10 px-6 w-[30vw] rounded-lg">
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
              <Input label="Full name" type="text" />
            </div>
          )}
          <div
            className={`otherInput ${
              active === "signup" && !fromHome && "-mt-4"
            } ${active === "signup" && fromHome && "mt-0"}`}
          >
            <Input label="Email" type="text" />
            <Input label="Password" type="password" />
            <div className="flex justify-between mt-6 items-center">
              <span className="text-[13px] text-[#19483a]">
                Forgot password?
              </span>
              <button className="bg-[#19483a] text-[#fff] text-[14px] rounded-lg font-semibold px-8 py-1">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
