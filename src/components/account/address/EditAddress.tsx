import React, { FC } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Input from "../../defaults/Input";

interface AddressProps {
  editAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditAddress: FC<AddressProps> = ({ editAddress, setEditAddress }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <h2 className="text-[22px] font-bold font-mono text-[#808080] pb-6">
        Edit Address
      </h2>
      <button onClick={() => setEditAddress(!editAddress)}>
        <FaArrowLeft />
      </button>

      <div className="w-[60%]">
        <div className="flex justify-between space-x-10">
          <Input type="text" label="First Name" fullBorder />
          <Input type="text" label="Last Name" fullBorder />
        </div>
        <div className="flex justify-between space-x-10 mt-3">
          <Input type="number" label="Mobile Number" fullBorder />
          <Input type="text" label="Additional Mobile Number" fullBorder />
        </div>

        <div className="flex justify-end">
          <button className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-2 px-6 font-semibold rounded-lg">
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default EditAddress;
