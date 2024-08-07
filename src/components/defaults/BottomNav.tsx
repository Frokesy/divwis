import { FC } from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping, FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

interface BottomNavProps {
  active: string;
}

const BottomNav: FC<BottomNavProps> = ({ active }) => {
  return (
    <div className="fixed lg:hidden block bottom-0 w-[100%] bg-[#fff] z-30">
      <div className="px-6 flex justify-between items-center text-[14px]">
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
        <NavLink
          to="/search"
          className={`flex flex-col items-center transition-all duration-500 ease-in-out space-y-1 ${
            active === "search"
              ? "text-[#ff7c08] font-semibold"
              : "text-[#808080]"
          }`}
        >
          <FaSearch />
          <h2>Search</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={`flex flex-col items-center transition-all duration-500 ease-in-out p-3 my-3 rounded-full ${
            active === "cart"
              ? "text-[#fff] bg-[#ff7c08]"
              : "text-[#808080] border border-[#808080]"
          }`}
        >
          <FaCartShopping size={24} />
        </NavLink>
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
