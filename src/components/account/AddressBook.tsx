import { motion } from "framer-motion";

const AddressBook = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center space-x-6">
        <h2 className="text-[22px] font-bold font-mono text-[#808080]">
          Addresses (3)
        </h2>
        <p className="text-[#6eb356] text-[15px] font-semibold cursor-pointer">
          Edit
        </p>
      </div>

      <div className="grid grid-cols-2 w-[80%] gap-y-6 mt-6">
        <div className="">
          <p className="font-semibold mt-2 text-[18px]">FrokesLini Noah</p>
          <p className="text-[#404040] text-[14px] mt-1">
            Mayfair, Ile-Ife. Osun State, Nigeria.
          </p>
          <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
          <p className="text-[13px] capitalize font-bold text-[#6eb356]">
            default address.
          </p>
        </div>

        <div className="">
          <p className="font-semibold mt-2 text-[18px]">FrokesLini Noah</p>
          <p className="text-[#404040] text-[14px] mt-1">
            Mayfair, Ile-Ife. Osun State, Nigeria.
          </p>
          <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
        </div>

        <div className="">
          <p className="font-semibold mt-2">FrokesLini Noah</p>
          <p className="text-[#404040] text-[14px] mt-1">
            Mayfair, Ile-Ife. Osun State.
          </p>
          <p className="text-[#404040] text-[14px]">(+234) 9157881431</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AddressBook;
