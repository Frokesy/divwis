import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import { Cart, Phone, Search } from "../svgs/Icons";
import Logo from "./Logo";
import Hamburger from "hamburger-react";
import Drawer from "./Drawer";

const Header = () => {
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

  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div className="lg:w-[80vw] w-[95vw] mt-3 lg:mt-0 mx-auto">
        <div className="lg:flex hidden justify-between items-center my-2">
          <h2>Hello there,</h2>
          <div className="flex items-center space-x-6 text-[12px] text-[#767676]">
            <span className="cursor-pointer">My Account</span>
            <span className="cursor-pointer">Wishlist</span>
            <span className="cursor-pointer">Checkout</span>
            <div className="flex items-center cursor-pointer">
              <Phone />
              <span>1 800 123 1234</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex">
            <div className="lg:flex hidden items-center border border-[#ccc] min-w-[600px] px-2">
              <Search />
              <select
                name="categories"
                className="bg-[#fff] lg:block hidden outline-none border-none text-[13px] lg:px-2"
              >
                <option value="1">All categories</option>
                <option value="2">Cereals</option>
                <option value="3">Fruits</option>
                <option value="4">Vegetables</option>
                <option value="5">Meat</option>
                <option value="6">Dairy</option>
              </select>
              <input
                type="text"
                placeholder="Search here..."
                className="pl-4 border-none outline-none w-[98%] text-[13px] placeholder:text-[14px]"
              />
            </div>
            <button className="bg-[#19483a] text-[#fff] lg:block hidden text-[13px] font-bold px-8 py-1">
              Search
            </button>
          </div>

          <div className="flex items-center lg:space-x-8 space-x-4 text-[13px] text-[#333]">
            <div className="flex lg:space-x-3 space-x-2">
              <span
                className="text-[#19483a] font-bold cursor-pointer"
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
            <div className="flex items-center space-x-2">
              <div className="scale-150">
                <Cart />
              </div>
              <span className="lg:block hidden">My Cart</span>
              <span className="py-0.5 px-1.5 rounded-full text-[11px] text-[#fff] bg-[#19483a] lg:block hidden">
                0
              </span>
            </div>
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
