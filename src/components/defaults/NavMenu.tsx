const NavMenu = () => {
  return (
    <div className="w-[100%] bg-[#19483a] lg:mt-6 mt-2">
        <div className="lg:w-[80vw] w-[95vw] text-[#fff] lg:text-[14px] text-[11px] uppercase font-semibold font-mono mx-auto flex items-center lg:space-x-6 space-x-8">
            <span className="cursor-pointer hover:bg-[#051410] py-4 lg:px-3">Cereals</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 lg:px-3">Fruits</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 lg:px-3">Vegetables</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 lg:px-3">Meat</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 lg:px-3">Milk & Dairy</span>
        </div>
        
    </div>
  )
}

export default NavMenu
