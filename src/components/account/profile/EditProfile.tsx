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
        <h2 className="text-[26px] font-bold font-mono text-[#808080] pb-6">
          Update Profile
        </h2>

        <button onClick={() => setEditStatus(!editStatus)}>
          <FaArrowLeft />
        </button>

        <div className="w-[60%]">
          <div className="flex justify-between space-x-10">
            <Input type="text" label="First Name" fullBorder />
            <Input type="text" label="Last Name" fullBorder />
          </div>
          <div className="flex justify-between space-x-10 mt-3">
            <Input type="number" label="Mobile Number" fullBorder />
            <Input type="text" label="Email Address" fullBorder />
          </div>

          <button className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-2 px-6 font-semibold rounded-lg">
            Update Profile
          </button>
        </div>


        <div className="w-[60%]">
        <h2 className="text-[26px] font-bold font-mono text-[#808080] pt-16">
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

          <button className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-2 px-6 font-semibold rounded-lg">
            Update Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
