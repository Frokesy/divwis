const NavMenu = () => {
  return (
    <div className="w-[100%] bg-[#19483a] mt-4">
        <div className="w-[70vw] text-[#fff] text-[14px] mx-auto flex items-center space-x-6">
            <span className="cursor-pointer hover:bg-[#051410] py-3 px-3">Cereals</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 px-3">Fruits</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 px-3">Vegetables</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 px-3">Meat</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 px-3">Dairy</span>
            <span className="cursor-pointer hover:bg-[#051410] py-3 px-3">Compare</span>
        </div>
        
    </div>
  )
}

export default NavMenu
