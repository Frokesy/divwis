import { motion } from "framer-motion";
import { FaTrashAlt, FaWallet } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../defaults/Loader";

interface CartProps {
  id: number;
  name: string;
  price: string;
  priceId?: string;
  review: string;
  productImg: string;
  quantity: number;
}

const CartAccordion = () => {
  const [data, setData] = useState<CartProps[]>([]);
  const [totalCost, setTotalCost] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);
  const idb = window.indexedDB;
  const id = localStorage.getItem("id");

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

  const handleCheckout = async () => {
    setLoading(true);
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: data, id, totalCost }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  useEffect(() => {
    getAllData();
    getTotalCost();
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -ml-[300px] bg-[#fff] top-14 pl-4 py-4 min-w-[400px] shadow-xl"
    >
      {data.length === 0 ? (
        <div>
          <h2 className="text-[#808080] font-semibold text-center py-3 text-[14px] ">
            Cart is Empty
          </h2>
        </div>
      ) : (
        <div>
          <div className="space-y-3 max-h-[260px] overflow-y-auto">
            {data.map((item) => (
              <div className="" key={item.id}>
                <div className="flex items-center space-x-3">
                  <img src={item.productImg} alt="img" className="w-[4rem] h-[3rem]" />
                  <div className="flex flex-col space-y-1">
                    <h2 className="text-[16px] font-bold text-[#333]">
                      {item.name}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <p className="text-[14px]">
                        ${item.price} x {item.quantity}
                      </p>
                      <FaTrashAlt
                        onClick={() => handleDelete(item)}
                        fill="#ff0406"
                      />
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
              <p className="text-[#6eb356]">${totalCost}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="flex items-center justify-center w-[100%] h-[50px] bg-[#6eb356] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out"
            >
              {loading ? (
                <Loader />
              ) : (
                <div className="flex items-center text-[#fff] space-x-3 text-[18px] font-semibold">
                  <FaWallet />
                  <span>Checkout</span>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CartAccordion;
