import { motion } from "framer-motion";
import { FC } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

interface OrderProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const TrackOrder: FC<OrderProps> = ({ setActivePage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <button onClick={() => setActivePage("index")}>
        <FaArrowLeft />
      </button>

      <div className="mt-6">
        <h2 className="font-semibold text-[18px]">Order Tracking</h2>
        <div className="flex items-center mt-10">
          <div className="flex flex-col items-center relative">
            <FaCheckCircle fill="#6eb356" size={30} />
            <h2 className="absolute top-10 text-[14px] text-[#6eb356] font-semibold">
              Pending
            </h2>
          </div>
          <div className="h-1 w-[200px] -ml-1 bg-[#6eb356] z-10"></div>
          <div className="flex flex-col relative items-center">
            <FaCheckCircle fill="#6eb356" size={30} className="-ml-1" />
            <h2 className="absolute top-10 text-[14px] text-[#6eb356] font-semibold">
              Processing
            </h2>
          </div>
          <div className="h-1 w-[200px] -ml-1 bg-[#6eb356] z-10"></div>
          <div className="flex flex-col items-center relative">
            <div className="text-[#6eb356] w-[29.06px] h-[29.06px] font-bold border border-[#6eb356] flex items-center justify-center rounded-full">
              3
            </div>
            <h2 className="absolute top-10 min-w-[100px] text-[14px] flex justify-center items-center text-[#6eb356] font-semibold">
              On the way
            </h2>
          </div>
          <div className="h-1 w-[200px] -ml-0 bg-[#ccc] z-10"></div>
          <div className="flex flex-col relative items-center">
            <div className="text-[#333] w-[29.06px] h-[29.06px] border border-[#ccc] flex items-center justify-center rounded-full">
              4
            </div>
            <h2 className="absolute top-10 min-w-[100px] text-[14px] flex justify-center items-center text-[#333]">
              Delivered
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white mt-20">
        <div className="overflow-x-auto">
          <div className=" w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="pl-3 py-3 text-xs w-[20%] border-r border-[#ccc] font-bold text-left text-[#333]"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      className="pl-3 py-3 text-xs w-[75%] font-bold text-left text-[#333]"
                    >
                      Status Info
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                    <td className="pl-3 py-3 border-r border-[#ccc] text-sm whitespace-nowrap">
                      14 Feb 2023 - 13:19
                    </td>
                    <td className="pl-3 py-3 text-sm whitespace-nowrap">
                      Your package has been delivered. Thank you for shopping at
                      Grostore!
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                    <td className="pl-3 py-3 border-r border-[#ccc] text-sm whitespace-nowrap">
                      13 Feb 2023 - 13:39
                    </td>
                    <td className="pl-3 py-3 text-sm whitespace-nowrap">
                      Your package has been handed over to Grostore Delivery.
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                    <td className="pl-3 py-4 border-r border-[#ccc] text-sm whitespace-nowrap">
                      12 Feb 2023 - 14:50
                    </td>
                    <td className="pl-3 py-4 text-sm whitespace-nowrap">
                      Your package has been packed and is being handed over to a
                      logistics partner
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                    <td className="pl-3 py-4 border-r border-[#ccc] text-sm whitespace-nowrap">
                      12 Feb 2023 - 13:05
                    </td>
                    <td className="pl-3 py-4 text-sm whitespace-nowrap">
                      Your order has been successfully verified.
                    </td>
                  </tr>
                  <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                    <td className="pl-3 py-4 border-r border-[#ccc] text-sm whitespace-nowrap">
                      12 Feb 2023 - 13:05
                    </td>
                    <td className="pl-3 py-4 text-sm whitespace-nowrap">
                      Thank you for shopping at GroStore! Your order is being
                      verified.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TrackOrder;
