import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaEdit, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

interface ProfileProps {
  editStatus: boolean;
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountOverview: FC<ProfileProps> = ({ editStatus, setEditStatus }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="">
        <div className="flex lg:items-center space-x-6 pb-10">
          <h2 className="lg:text-[26px] text-[18px] font-bold font-mono lg:text-[#808080]">
            Personal Information
          </h2>
          <FaEdit
            fill="#6eb356"
            className="mt-0.5 block lg:hidden"
            onClick={() => setEditStatus(!editStatus)}
          />
          <p
            className="text-[#6eb356] text-[15px] font-semibold cursor-pointer lg:block hidden"
            onClick={() => setEditStatus(!editStatus)}
          >
            Edit
          </p>
        </div>
        <div className="flex lg:items-center space-y-6 lg:space-y-0 lg:flex-row flex-col lg:space-x-6">
          <div className="text-[#ccc] bg-[#f1f1f1] w-[8rem] flex items-center justify-center py-6 rounded-full">
            <FaUser size={80} />
          </div>
          <div className="space-y-1">
            <h2 className="lg:text-[24px] text-[18px] mb-3 font-semibold">Frokeslini Noah</h2>
            <div className="flex items-center text-[14px] space-x-2 text-[#404040]">
              <FaLocationPin />
              <p>Mayfair, Ile-Ife. Osun State.</p>
            </div>
            <div className="flex items-center text-[14px] space-x-2 text-[#404040]">
              <FaPhoneAlt />
              <p>(+234) 9157881431</p>
            </div>
            <div className="flex items-center text-[14px] space-x-2 text-[#404040]">
              <FaLocationPin />
              <p>frokeslini@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 lg:w-[80%] w-[100%]">
        <h2 className="lg:text-[26px] text-[20px] font-bold font-mono lg:text-[#808080] pb-2">
          Address Book
        </h2>
        <div className="flex justify-between lg:flex-row flex-col lg:space-y-0 space-y-6">
          <div className="">
            <h2 className="font-mono text-[#808080] uppercase font-semibold">
              default delivery address
            </h2>
            <p className="font-semibold mt-2">FrokesLini Noah</p>
            <p className="text-[#404040] text-[14px]">
              Mayfair, Ile-Ife. Osun State.
            </p>
            <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
          </div>
          <div className="">
            <h2 className="font-mono text-[#808080] uppercase font-semibold">
              default billing address
            </h2>
            <p className="font-semibold mt-2">FrokesLini Noah</p>
            <p className="text-[#404040] text-[14px]">
              Mayfair, Ile-Ife. Osun State.
            </p>
            <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-[26px] font-bold font-mono text-[#808080] pb-2">
          Account Summary
        </h2>

        <div className="grid lg:grid-cols-4 grid-cols-2 w-[90vw] lg:w-[100%] gap-y-10 lg:pr-6 mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-[34px] font-bold text-[#21b169]">10</span>
            <p className="text-[14px]">Total Orders Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[34px] font-bold text-[#fcb221]">3</span>
            <p className="text-[14px]">Pending Orders</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[34px] font-bold text-[#44c3f7]">7</span>
            <p className="text-[14px]">Delivered Orders</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[34px] font-bold text-[#a158ff]">$2k+</span>
            <p className="text-[14px]">Total Amount Spent</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountOverview;
