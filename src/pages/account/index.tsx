import {
  FaAddressBook,
  FaHistory,
  FaJournalWhills,
  FaPowerOff,
  FaSquare,
  FaUserAlt,
} from "react-icons/fa";
import MainContainer from "../../components/wrappers/MainContainer";
import { useState } from "react";
import Profile from "../../components/account/Profile";

const Account = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <MainContainer>
      <div className="pt-20 min-h-[90vh] bg-[#f1f1f1]">
        <div className="w-[80vw] mx-auto bg-[#fff] rounded-2xl shadow-lg py-10 px-10 flex justify-between">
          <div className="w-[20%] space-y-4">
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
              onClick={() => setActiveTab("history")}
              className={`${
                activeTab === "history" && "text-[#6eb356] font-bold"
              } transition-all duration-300 ease-in-out hover:px-2 cursor-pointer text-[#404040] flex items-center space-x-3`}
            >
              <FaHistory />
              <h2 className="text-[15px]">Order History</h2>
            </div>
            <div
              onClick={() => setActiveTab("payment-info")}
              className={`${
                activeTab === "payment-info" && "text-[#6eb356] font-bold"
              } transition-all duration-300 ease-in-out hover:px-2 cursor-pointer text-[#404040] flex items-center space-x-3`}
            >
              <FaJournalWhills />
              <h2 className="text-[15px]">Payment Details</h2>
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
            <div
              onClick={() => setActiveTab("tracking")}
              className={`${
                activeTab === "tracking" && "text-[#6eb356] font-bold"
              } transition-all duration-300 ease-in-out hover:px-2 cursor-pointer text-[#404040] flex items-center space-x-3`}
            >
              <FaSquare />
              <h2 className="text-[15px]">Order Tracking</h2>
            </div>
            <div className="text-[#ff0406] flex items-center space-x-3 transition-all duration-300 ease-in-out hover:px-2 cursor-pointer">
              <FaPowerOff />
              <h2 className="text-[15px]">Sign out</h2>
            </div>
          </div>

          {/* main content */}
          <div className="w-[75%] h-[60vh] overflow-y-auto">{activeTab && <Profile />}</div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Account;
