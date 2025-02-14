import { motion } from "framer-motion";
import React, { FC } from "react";

interface OrderProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  orders: Orders[];
  getSelectedOrder: (order: Orders) => void;
}

interface Orders {
  id: number;
  created: string;
  user_id: string;
  session_id: string;
  totalCost: string;
  status: string;
  products: ProductProps[];
}

interface ProductProps {
  id: string;
  name: string;
  priceId: string;
  price: string;
  productImg: string;
  quantity: number;
  length: number;
}

const OrderHistory: FC<OrderProps> = ({
  setActivePage,
  orders,
  getSelectedOrder,
}) => {
  const switchPage = (order: Orders, page: string) => {
    setActivePage(page);
    getSelectedOrder(order);
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC",
    };
    const formattedDate: string = new Intl.DateTimeFormat(
      "en-GB",
      options
    ).format(date);
    return formattedDate;
  };

  return (
    <div className="">
      {orders.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <h2 className="lg:text-[22px] text-[20px] font-bold font-mono lg:text-[#808080]">
            Order History
          </h2>

          <div className="flex flex-col bg-white mt-4 w-[100%]">
            <div className="">
              <div className=" w-full inline-block align-middle">
                <div className="overflow-x-auto border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="pl-6 py-3 lg:text-[14px] text-[10px] font-bold text-left text-gray-500 uppercase "
                        >
                          Order Number
                        </th>
                        <th
                          scope="col"
                          className="pr-6 py-3 lg:text-[14px] text-[10px] font-bold text-left text-gray-500 uppercase "
                        >
                          Placed on
                        </th>
                        <th
                          scope="col"
                          className="py-3 lg:text-[14px] text-[10px] font-bold text-center text-gray-500 uppercase "
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 lg:text-[14px] text-[10px] font-bold text-center text-gray-500 uppercase "
                        >
                          Total ($)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 lg:text-[14px] text-[10px] font-bold text-center text-gray-500 uppercase "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>

                    {orders.map((order) => (
                      <tbody
                        key={order.id}
                        className="divide-y divide-gray-200"
                      >
                        <tr className="cursor-pointer hover:text-[#3A5743] transition-all duration-500 ease-in-out text-[#8D9091] hover:text-semibold hover:bg-neutral-200">
                          <td className="px-6 py-4 whitespace-nowrap lg:text-[14px] text-[12px]">
                            {order.id}
                          </td>
                          <td className="pr-6 py-4 whitespace-nowrap lg:text-[14px] text-[12px]">
                            {formatDate(order.created)}
                          </td>
                          <td
                            className={`py-4 text-center ${
                              order.status === "delivered" && "text-[#63b356]"
                            } ${
                              order.status === "shipped" && "text-[#3d8eb9]"
                            } ${
                              order.status === "processing" && "text-[#e05d00]"
                            } ${
                              order.status === "pending" && "text-[#d04c95]"
                            }  font-medium whitespace-nowrap lg:text-[14px] text-[12px]`}
                          >
                            {order.status}
                          </td>
                          <td className="px-6 py-4 font-medium text-center whitespace-nowrap lg:text-[14px] text-[12px]">
                            {order.totalCost}
                          </td>
                          <td
                            onClick={() => switchPage(order, "viewOrder")}
                            className="py-4 lg:text-[14px] text-[12px] font-medium text-[#6eb356] flex justify-center whitespace-nowrap"
                          >
                            View Details
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <p className="text-center my-[20vh] text-[#808080] font-semibold text-[20px]">No orders yet</p>
      )}
    </div>
  );
};

export default OrderHistory;
