import Header from "../../components/defaults/Header";
import NavMenu from "../../components/defaults/NavMenu";
import SideNav from "../../components/shops/SideNav";

const Shops = () => {
  return (
    <div>
      <Header />
      <NavMenu />
      <div className="bg-[#f1f1f1] min-h-[80vh]">
        <div className="flex w-[80vw] mx-auto justify-between pt-[10vh]">
          <div className="w-[25%]">
            <SideNav />
          </div>
          <div className="main w-[70%] border border-red-500">
            <h2>Main content</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
