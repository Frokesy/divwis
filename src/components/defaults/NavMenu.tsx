import Logo from "./Logo";

const NavMenu = () => {
  return (
    <div className="w-[100%] absolute top-12">
      <div className="lg:w-[80vw] w-[95vw] bg-[#fff] mx-auto shadow-xl rounded-lg min-h-[70px] flex items-center justify-between px-8">
        <Logo />
        <div className="lg:text-[14px] text-[11px] font-mono space-x-10">
          <span className="cursor-pointer">Cereals</span>
          <span className="cursor-pointer">Fruits</span>
          <span className="cursor-pointer">Vegetables</span>
          <span className="cursor-pointer">Meat</span>
          <span className="cursor-pointer">Milk & Dairy</span>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
