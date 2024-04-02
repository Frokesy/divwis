import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

const BottomNav = () => {
  return (
    <div className="fixed lg:hidden block bottom-0 w-[100%] bg-[#fff] z-30">
      <div className="px-6 flex justify-between py-4 text-[#808080] font-semibold text-[14px]">
        <div className="flex flex-col items-center space-y-1">
          <FaBars />
          <h2>Categories</h2>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <FaSearch />
          <h2>Search</h2>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <FaUser />
          <h2>Account</h2>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <FaBagShopping />
          <h2>Shop</h2>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
