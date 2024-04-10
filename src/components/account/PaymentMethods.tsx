import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const PaymentMethods = () => {
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
        Default Payment Methods
      </h2>

      <div className="flex flex-col bg-white mt-4">
        <div className="overflow-x-auto">
          <div className=" w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="pl-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Credit/Debit card info
                    </th>
                    <th
                      scope="col"
                      className="pr-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Card Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Expires on
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Card Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                    <td className="px-6 py-4 text-sm whitespace-nowrap">
                      GtBank - Visa
                    </td>
                    <td className="pr-6 py-4 text-sm whitespace-nowrap">
                      Frokeslini Noah
                    </td>
                    <td className="py-4 text-sm text-center font-medium whitespace-nowrap">
                      03/25
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                      **** **** **** 4125
                    </td>
                    <td className="py-4 text-sm font-medium text-[#6eb356] flex justify-center whitespace-nowrap">
                      <FaEye />
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

export default PaymentMethods;
