import Hamburger from "hamburger-react";
import Logo from "./Logo";
import { useState } from "react";
import Drawer from "./Drawer";

const NavMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="w-[100%] lg:absolute lg:top-12 fixed top-0 z-40">
      <div className="lg:w-[80vw] w-[100vw] bg-[#fff] mx-auto lg:shadow-xl shadow-lg rounded-lg h-[70px] overflow-y-auto flex items-center justify-between px-6 lg:px-8">
        <Logo />
        <div className="block lg:hidden z-50">
          <Hamburger
            size={20}
            toggled={openDrawer}
            toggle={setOpenDrawer}
            color="#19483a"
          />
        </div>
        <div className="lg:text-[14px] text-[11px] text-[#808080] font-semibold lg:block hidden space-x-10">
          <span className="cursor-pointer">Cereals</span>
          <span className="cursor-pointer">Fruits</span>
          <span className="cursor-pointer">Vegetables</span>
          <span className="cursor-pointer">Meat</span>
          <span className="cursor-pointer">Milk & Dairy</span>
        </div>
      </div>
      {openDrawer && <Drawer />}
    </div>
  );
};

export default NavMenu;
