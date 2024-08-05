import MainContainer from "../../components/wrappers/MainContainer";
import { motion } from "framer-motion";
import { FaTrashAlt, FaWallet } from "react-icons/fa";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface CartProps {
  id: number;
  name: string;
  price: string;
  priceId?: string;
  review: string;
  productImg: string;
  quantity: number;
}

const MobileCart = () => {
  const [data, setData] = useState<CartProps[]>([]);
  const [totalCost, setTotalCost] = useState<number>();
  const idb = window.indexedDB;

  const getAllData = () => {
    const dbPromise = idb.open("divwis", 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;

      const tx = db.transaction("cart", "readonly");
      const cart = tx.objectStore("cart");
      const data = cart.getAll();

      data.onsuccess = (query) => {
        if (query.srcElement) {
          setData((query.srcElement as IDBRequest).result);
        }
      };

      tx.oncomplete = function () {
        db.close();
      };
    };
  };

  const getTotalCost = () => {
    const totalCost = data.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
    setTotalCost(totalCost);
  };

  const handleDelete = (item: CartProps) => {
    const dbPromise = idb.open("divwis", 1);
    dbPromise.onsuccess = function () {
      const db = dbPromise.result;
      const tx = db.transaction("cart", "readwrite");
      const cart = tx.objectStore("cart");
      const deleteData = cart.delete(item.id);

      deleteData.onsuccess = () => {
        tx.oncomplete = function () {
          getAllData();
          getTotalCost();
          db.close();
        };
      };
    };
  };

  useEffect(() => {
    getAllData();
    getTotalCost();
  });

  return (
    <MainContainer active="cart">
      <div className="bg-[#f1f1f1] pb-[10vh] lg:pt-10 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:w-[40vw] w-[95vw] mx-auto lg:mt-[6vh] bg-[#fff] rounded-lg mt-[10vh] py-[5vh] px-4"
        >
          {data.length === 0 ? (
            <div>
              <h2 className="text-[#808080] font-semibold text-center py-3 text-[14px] ">
                Cart is Empty
              </h2>
            </div>
          ) : (
            <div className="flex flex-col justify-between h-[65vh] overflow-y-auto">
              <div className="space-y-3">
                {data.map((item) => (
                  <div className="" key={item.id}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.productImg}
                          alt="img"
                          className="w-[4rem]"
                        />
                        <div className="flex flex-col space-y-1">
                          <h2 className="text-[16px] font-bold text-[#333]">
                            {item.name}
                          </h2>
                          <div className="flex items-center space-x-4">
                            <p className="text-[14px]">
                              ${item.price} x {item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer">
                        <FaTrashAlt
                          onClick={() => handleDelete(item)}
                          fill="#ff0406"
                        />
                      </div>
                    </div>
                    <hr className="w-[100%] mt-2" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-end">
                <div className="flex justify-between mt-4 items-center">
                  <h2 className="text-[#333] text-[18px]">Subtotal:</h2>
                  <p className="text-[#6eb356]">${totalCost}</p>
                </div>
                <NavLink
                  to="/checkout"
                  className="flex items-center justify-center w-[100%] h-[50px] lg:bg-[#6eb356] lg:hover:bg-[#ff7c08] bg-[#ff7c08] hover:bg-[#6eb356] transition-colors duration-500 ease-in-out"
                >
                  <div className="flex items-center text-[#fff] space-x-3 text-[18px] font-semibold">
                    <FaWallet />
                    <span>Checkout</span>
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </MainContainer>
  );
};

export default MobileCart;
