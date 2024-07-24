import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import OrderCard from "../../cards/OrderCard";

interface OrderProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  order: Orders | undefined;
}

interface Orders {
  id: number;
  created_at: string;
  user_id: string;
  session_id: string;
  totalCost: string;
  status: string;
  products: ProductProps[];
  orderNumber: string;
}

interface ProductProps {
  id: string;
  name: string;
  priceId: string;
  price: string;
  productImg: string;
  quantity: number;
  length: number
}

const ViewOrderDetails: FC<OrderProps> = ({ setActivePage, order }) => {
  
  
  const formatDate = (isoDate: string | undefined) => {
    const date = new Date(isoDate as string);

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <button
        className="flex items-center justify-center space-x-3"
        onClick={() => setActivePage("index")}
      >
        <FaArrowLeft />
        <span className="text-[18px] mt-0.5 font-semibold">Order Details</span>
      </button>

      <div className="">
        <div className="text-[#808080] text-[14px] mt-4">
          <h2>Order No {order?.orderNumber.slice(0, 8)}</h2>
          <p>{order?.products.length} items</p>
          <p>Placed on {formatDate(order?.created_at)}</p>
          <p>Total ${order?.totalCost}</p>
        </div>

        <h2 className="text-[14px] font-semibold mt-10 text-[#333] uppercase">
          Items in your order
        </h2>
        <OrderCard orderItems={order?.products} orderDate={formatDate(order?.created_at)} />
      </div>
    </motion.div>
  );
};

export default ViewOrderDetails;
