import { FC } from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface BottomNavProps {
  active: string;
}

const BottomNav: FC<BottomNavProps> = ({ active }) => {
  return (
    <div className="fixed lg:hidden block bottom-0 w-[100%] bg-[#fff] z-30">
      <div className="px-6 flex justify-between py-4 text-[14px]">
        <NavLink
          to="/" 
          className={`flex flex-col items-center transition-all duration-500 ease-in-out space-y-1 ${
            active === "home"
              ? "text-[#ff7c08] font-semibold"
              : "text-[#808080]"
          }`}
        >
          <FaHome />
          <h2>Home</h2>
        </NavLink>
        <div
          className={`flex flex-col items-center transition-all duration-500 ease-in-out space-y-1 ${
            active === "search"
              ? "text-[#ff7c08] font-semibold"
              : "text-[#808080]"
          }`}
        >
          <FaSearch />
          <h2>Search</h2>
        </div>
        <NavLink
          to={"/shops/0"}
          className={`flex flex-col items-center transition-all duration-500 ease-in-out space-y-1 ${
            active === "shop"
              ? "text-[#ff7c08] font-semibold"
              : "text-[#808080]"
          }`}
        >
          <FaBagShopping />
          <h2>Shop</h2>
        </NavLink>
        <NavLink
          to={"/account"}
          className={`flex flex-col items-center transition-all duration-500 ease-in-out space-y-1 ${
            active === "account"
              ? "text-[#ff7c08] font-semibold"
              : "text-[#808080]"
          }`}
        >
          <FaUser />
          <h2>Account</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
