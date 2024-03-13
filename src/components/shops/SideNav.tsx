import Categories from "./Categories"
import Filter from "./Filter"
import Rating from "./Rating"
import Search from "./Search"

const SideNav = () => {
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
        <Search />
        <Categories />
        <Filter />
        <Rating />
    </div>
  )
}

export default SideNav
