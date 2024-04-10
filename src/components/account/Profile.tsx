import { motion } from "framer-motion";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const Profile = () => {
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
        <h2 className="text-[26px] font-bold font-mono uppercase text-[#808080] pb-10">
          Personal Information
        </h2>
        <div className="flex items-center space-x-6">
          <div className="text-[#ccc] bg-[#f1f1f1] w-[8rem] flex items-center justify-center py-6 rounded-full">
            <FaUser size={80} />
          </div>
          <div className="space-y-1">
            <h2 className="text-[24px] mb-3 font-semibold">Frokeslini Noah</h2>
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

      <div className="mt-20 w-[80%]">
        <h2 className="text-[26px] font-bold font-mono uppercase text-[#808080] pb-2">
          Address Book
        </h2>
        <div className="flex justify-between">
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
        <h2 className="text-[26px] font-bold font-mono uppercase text-[#808080] pb-2">
          Account Summary
        </h2>

        <div className="flex justify-between pr-6">
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

export default Profile;
