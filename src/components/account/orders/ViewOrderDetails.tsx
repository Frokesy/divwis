import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";
import OrderCard from "../../cards/OrderCard";

interface OrderProps {
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const ViewOrderDetails: FC<OrderProps> = ({ setActivePage }) => {
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
          <h2>Order No 635981586200289</h2>
          <p>2 items</p>
          <p>Placed on 03/12/2022</p>
          <p>Total $150.00</p>
        </div>

        <h2 className="text-[14px] font-semibold mt-10 text-[#333] uppercase">
          Items in your order
        </h2>
        <OrderCard />
      </div>
    </motion.div>
  );
};

export default ViewOrderDetails;
