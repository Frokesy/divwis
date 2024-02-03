import { useState } from "react";
import Input from "../defaults/Input";
import gsap from "gsap";

const AuthModal = () => {
  const [active, setActive] = useState("login");

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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut" }
      );
    }

    if (tab === "login") {
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
      <div className="bg-[#fff] py-10 px-6 w-[25vw] rounded-lg">
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
          <div className={`otherInput ${active === "signup" && '-mt-4'}`}>
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
