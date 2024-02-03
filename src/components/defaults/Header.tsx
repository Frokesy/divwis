import { useState } from "react";
import AuthModal from "../modals/AuthModal";
import { Cart, Phone, Search } from "../svgs/Icons";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-[70vw] mx-auto">
        <div className="flex justify-between items-center my-2">
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
        <div className="flex justify-between">
          <Logo />
          <div className="flex">
            <div className="flex items-center border border-[#ccc] min-w-[600px] px-2">
              <Search />
              <select
                name="categories"
                className="bg-[#fff] outline-none border-none text-[13px] px-2"
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
            <button className="bg-[#19483a] text-[#fff] text-[13px] font-bold px-8 py-1">
              Search
            </button>
          </div>

          <div className="flex items-center space-x-8 text-[13px] text-[#333]">
            <div className="flex space-x-3">
              <span
                className="text-[#19483a] font-bold cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Login
              </span>
              <span>|</span>
              <span className="cursor-pointer">Sign up Now</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cart />
              <span>My Cart</span>
              <span className="py-0.5 px-1.5 rounded-full text-[11px] text-[#fff] bg-[#19483a]">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <AuthModal />}
    </>
  );
};

export default Header;
