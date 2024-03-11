import Header from "../../components/defaults/Header"
import NavMenu from "../../components/defaults/NavMenu"
import SideNav from "../../components/shops/SideNav"

const Shops = () => {
  return (
    <div>
      <Header />
      <NavMenu />
      <div className="flex w-[80vw] mx-auto mt-[10vh]">
        <SideNav />
      </div>
    </div>
  )
}

export default Shops
