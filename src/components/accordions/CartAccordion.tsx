import { motion } from "framer-motion";
import { cartItems } from "../data/cart";
import { FaTrashAlt, FaWallet } from "react-icons/fa";

const CartAccordion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -ml-[300px] bg-[#fff] top-14 pl-4 py-4 min-w-[400px] shadow-xl"
    >
      <div className="space-y-3 h-[260px] overflow-y-auto">
        {cartItems.map((item) => (
          <div className="" key={item.id}>
            <div className="flex items-center space-x-3">
              <img src={item.productImg} alt="img" className="w-[4rem]" />
              <div className="flex flex-col space-y-1">
                <h2 className="text-[16px] font-bold text-[#333]">
                  {item.name}
                </h2>
                <div className="flex items-center space-x-4">
                  <p className="text-[14px]">{item.price} x 1</p>
                  <FaTrashAlt fill="#ff0406" />
                </div>
              </div>
            </div>
            <hr className="w-[90%] mt-2" />
          </div>
        ))}
      </div>
      <div className="pr-4">
        <div className="flex justify-between mt-4 items-center">
          <h2 className="text-[#333] text-[18px]">Subtotal:</h2>
          <p className="text-[#6eb356]">$1200.00</p>
        </div>
        <button className="flex items-center justify-center w-[100%] bg-[#6eb356] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out text-[#fff] py-3 mt-3 space-x-3 text-[18px] font-semibold">
          <FaWallet />
          <span>Checkout</span>
        </button>
      </div>
    </motion.div>
  );
};

export default CartAccordion;
