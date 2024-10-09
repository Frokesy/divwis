import Hamburger from "hamburger-react";
import Logo from "./Logo";
import { useState } from "react";
import Drawer from "./Drawer";
import { NavLink } from "react-router-dom";
import { Cart, Search, UserIcon } from "../svgs/Icons";
import SearchAccordion from "../accordions/SearchAccordion";
import UserAccordion from "../accordions/UserAccordion";
import CartAccordion from "../accordions/CartAccordion";
import LogoutModal from "../modals/LogoutModal";
import ViewProductModal from "../modals/ViewProductModal";

interface ProductsProps {
  id: string;
  name: string;
  default_price: string;
  priceId?: string;
  review?: string;
  image: string;
  category: string;
  desc: string;
}

const NavMenu = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const [showAccordion, setShowAccordion] = useState<string>("");

  const [selectedProduct, setSelectedProduct] = useState<
  ProductsProps | undefined
>(undefined);
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  const categories = [
    { id: 1, name: "Cereals" },
    { id: 2, name: "Fruits" },
    { id: 3, name: "Vegetables" },
    { id: 4, name: "Meat" },
    { id: 5, name: "Milk & Dairy" },
  ];

  const logout = () => {
    setShowLogoutModal(true);
  };

  const handleProductClick = (product: ProductsProps) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="w-[100%] lg:absolute lg:top-12 fixed top-0 z-40">
      <div
        onMouseLeave={() => setShowAccordion("")}
        className="lg:w-[80vw] w-[100vw] bg-[#fff] mx-auto lg:shadow-xl shadow-lg rounded-lg max-h-[70px] h-[70px] overflow-y-hidden flex items-center justify-between px-6 lg:px-8"
      >
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
        <div className="lg:text-[14px] text-[11px] text-[#808080] font-semibold lg:flex items-center hidden space-x-10">
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
            <div className="">
              <div
                className="cursor-pointer"
                onMouseEnter={() => setShowAccordion("search")}
              >
                <Search />
              </div>
              {showAccordion === "search" && <SearchAccordion handleProductClick={handleProductClick} />}
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => setShowAccordion("user")}
            >
              <UserIcon />
              {showAccordion === "user" && <UserAccordion logout={logout} />}
            </div>
            <div
              className="cursor-pointer"
              onMouseEnter={() => setShowAccordion("cart")}
            >
              <Cart />
              {showAccordion === "cart" && <CartAccordion />}
            </div>
          </div>
        </div>
      </div>
      {showLogoutModal && <LogoutModal isOpen={showLogoutModal} setIsOpen={setShowLogoutModal} />}
      {openDrawer && <Drawer />}
      {isModalOpen && (
        <ViewProductModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default NavMenu;
