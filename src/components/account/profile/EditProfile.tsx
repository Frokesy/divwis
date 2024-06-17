import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Input from "../../defaults/Input";

interface ProfileProps {
  editStatus: boolean;
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProfile: FC<ProfileProps> = ({ editStatus, setEditStatus }) => {
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
        <div className="flex lg:block space-x-3">
          <button
            className="block lg:hidden"
            onClick={() => setEditStatus(!editStatus)}
          >
            <FaArrowLeft />
          </button>
          <h2 className="lg:text-[26px] text-[20px] font-bold font-mono lg:text-[#808080] lg:pb-6">
            Update Profile
          </h2>

          <button
            className="hidden lg:block"
            onClick={() => setEditStatus(!editStatus)}
          >
            <FaArrowLeft />
          </button>
        </div>

        <div className="lg:w-[60%] w-[100%]">
          <div className="flex justify-between space-x-10">
            <Input type="text" label="First Name" fullBorder />
            <Input type="text" label="Last Name" fullBorder />
          </div>
          <div className="flex justify-between space-x-10 mt-3">
            <Input type="number" label="Mobile Number" fullBorder />
            <Input type="text" label="Email Address" fullBorder />
          </div>

          <div className="flex justify-end">
            <button className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-2 px-6 font-semibold rounded-lg">
              Update Profile
            </button>
          </div>
        </div>

        <div className="lg:w-[60%] w-[100%]">
          <h2 className="lg:text-[26px] text-[20px] font-bold font-mono lg:text-[#808080] pt-16 mb-6 lg:mb-0">
            Change Password
          </h2>
          <div className="flex justify-between space-x-10">
            <Input type="text" label="Email Address" fullBorder />
            <Input type="password" label="Old Password" fullBorder />
          </div>
          <div className="flex justify-between space-x-10 mt-3">
            <Input type="password" label="New Password" fullBorder />
            <Input type="password" label="Re-type Password" fullBorder />
          </div>

          <div className="flex justify-end">
            <button className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-2 px-6 font-semibold rounded-lg">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
