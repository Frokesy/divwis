import Hamburger from "hamburger-react";
import Logo from "./Logo";
import { useState } from "react";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";
import { Cart, Search, UserIcon } from "../svgs/Icons";

const NavMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const categories = [
    { id: 1, name: "Cereals" },
    { id: 2, name: "Fruits" },
    { id: 3, name: "Vegetables" },
    { id: 4, name: "Meat" },
    { id: 5, name: "Milk & Dairy" },
  ];

  return (
    <div className="w-[100%] lg:absolute lg:top-12 fixed top-0 z-40">
      <div className="lg:w-[80vw] w-[100vw] bg-[#fff] mx-auto lg:shadow-xl shadow-lg rounded-lg h-[70px] overflow-y-auto flex items-center justify-between px-6 lg:px-8">
        <NavLink to="/" className="cursor-pointer">
          <Logo />
        </NavLink>
        <div className="block lg:hidden z-50">
          <Hamburger
            size={20}
            toggled={openDrawer}
            toggle={setOpenDrawer}
            color="#19483a"
          />
        </div>
        <div className="lg:text-[14px] text-[11px] text-[#808080] font-semibold lg:flex hidden space-x-10">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/shops/${category.id}`}
              className="cursor-pointer hover:text-[#ff7c08] transition-colors duration-300 ease-in-out"
            >
              {category.name}
            </NavLink>
          ))}
          <div className="flex items-center space-x-3">
            <Search />
            <UserIcon />
            <Cart />
          </div>
        </div>
      </div>
      {openDrawer && <Drawer />}
    </div>
  );
};

export default NavMenu;
