import { FaAddressBook, FaPowerOff, FaUserAlt } from "react-icons/fa";
import MainContainer from "../../components/wrappers/MainContainer";
import { useState } from "react";
import Profile from "../../components/account/profile";
import { FaSquareCheck } from "react-icons/fa6";
import Orders from "../../components/account/orders";
import Address from "../../components/account/address";
import LogoutModal from "../../components/modals/LogoutModal";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const id = localStorage.getItem("id");


  const logout = () => {
    setShowLogoutModal(true);
  };
  return (
    <MainContainer active="account">
      <div className="pt-20 min-h-[90vh] pb-[10vh] bg-[#f1f1f1]">
        <div className="lg:w-[80vw] w-[95vw] mx-auto bg-[#fff] rounded-2xl shadow-lg py-10 lg:px-10 px-6 flex justify-between lg:flex-row flex-col lg:space-y-0 space-y-10">
          <div className="lg:w-[20%] w-[100%] space-y-4">
            <h2 className="lg:hidden block font-semibold text-[18px]">Manage My Account</h2>
            <div
              onClick={() => setActiveTab("profile")}
              className={`${
                activeTab === "profile" && "text-[#6eb356] font-bold"
              } transition-all duration-300 ease-in-out hover:px-2 cursor-pointer text-[#404040] flex items-center space-x-3`}
            >
              <FaUserAlt />
              <h2 className="text-[15px]">Profile Details</h2>
            </div>
            <div
              onClick={() => setActiveTab("orders")}
              className={`${
                activeTab === "orders" && "text-[#6eb356] font-bold"
              } transition-all duration-300 ease-in-out hover:px-2 cursor-pointer text-[#404040] flex items-center space-x-3`}
            >
              <FaSquareCheck />
              <h2 className="text-[15px]">Orders</h2>
            </div>
            <div
              onClick={() => setActiveTab("address")}
              className={`${
                activeTab === "address" && "text-[#6eb356] font-bold"
              } transition-all duration-300 ease-in-out hover:px-2 cursor-pointer text-[#404040] flex items-center space-x-3`}
            >
              <FaAddressBook />
              <h2 className="text-[15px]">Address Book</h2>
            </div>
            <div           onClick={() => (id ? logout() : console.log("clicked"))} className="text-[#ff0406] flex items-center space-x-3 transition-all duration-300 ease-in-out hover:px-2 cursor-pointer">
              <FaPowerOff />
              <h2 className="text-[15px]">Sign out</h2>
            </div>
          </div>

          {/* main content */}
          <div className="lg:w-[75%] w-[100%] min-h-[65vh]">
            {activeTab === "profile" && <Profile />}
            {activeTab === "orders" && <Orders />}
            {activeTab === "address" && <Address />}
          </div>
        </div>
      </div>
      {showLogoutModal && <LogoutModal isOpen={showLogoutModal} setIsOpen={setShowLogoutModal} />}

    </MainContainer>
  );
};

export default Account;
