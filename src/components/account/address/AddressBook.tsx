import { motion } from "framer-motion";
import { FC } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

interface AddressProps {
  editAddress: boolean;
  setEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressBook: FC<AddressProps> = ({ editAddress, setEditAddress }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <h2 className="text-[22px] font-bold font-mono text-[#808080]">
        Addresses (3)
      </h2>
      <div className="grid grid-cols-2 w-[80%] gap-y-6 gap-x-10 mt-6">
        <div className="border border-[#ccc] hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="p-3">
            <p className="font-semibold mt-2 text-[18px]">FrokesLini Noah</p>
            <p className="text-[#404040] text-[14px] mt-1">
              Mayfair, Ile-Ife. Osun State, Nigeria.
            </p>
            <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
          </div>
          <div className="border border-[#ccc] p-3 flex justify-between">
            <p className="text-[13px] font-bold uppercase text-[#6eb356]">
              default address.
            </p>

            <div className="flex items-center space-x-6">
              <FaPen
                fill="#6eb356"
                className="cursor-pointer"
                onClick={() => setEditAddress(!editAddress)}
              />
              <FaTrash fill="#ff0406" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border border-[#ccc] hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="p-3">
            <p className="font-semibold mt-2 text-[18px]">FrokesLini Noah</p>
            <p className="text-[#404040] text-[14px] mt-1">
              Mayfair, Ile-Ife. Osun State, Nigeria.
            </p>
            <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
          </div>
          <div className="border border-[#ccc] p-3 flex justify-between">
            <p className="text-[13px] font-bold uppercase text-[#808080]">
              set as default.
            </p>

            <div className="flex items-center space-x-6">
              <FaPen
                fill="#6eb356"
                className="cursor-pointer"
                onClick={() => setEditAddress(!editAddress)}
              />
              <FaTrash fill="#ff0406" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border border-[#ccc] hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <div className="p-3">
            <p className="font-semibold mt-2 text-[18px]">FrokesLini Noah</p>
            <p className="text-[#404040] text-[14px] mt-1">
              Mayfair, Ile-Ife. Osun State, Nigeria.
            </p>
            <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
          </div>
          <div className="border border-[#ccc] p-3 flex justify-between">
            <p className="text-[13px] font-bold uppercase text-[#808080]">
              set as default.
            </p>

            <div className="flex items-center space-x-6">
              <FaPen
                fill="#6eb356"
                className="cursor-pointer"
                onClick={() => setEditAddress(!editAddress)}
              />
              <FaTrash fill="#ff0406" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AddressBook;
