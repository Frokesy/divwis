import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaHeart, FaPowerOff, FaUser } from "react-icons/fa";

const UserAccordion = () => {
  const [allUsers, setAllUsers] = useState([]);
  const idb = window.indexedDB;

  useEffect(() => {
    const getAllData = () => {
      const dbPromise = idb.open("divwis", 1);
      dbPromise.onsuccess = () => {
        const db = dbPromise.result;

        const tx = db.transaction("favorites", "readonly");
        const favorites = tx.objectStore("favorites");
        const users = favorites.getAll();

        users.onsuccess = (query) => {
          if (query.srcElement) {
            setAllUsers((query.srcElement as IDBRequest).result);
          }
        };

        tx.oncomplete = function () {
          db.close();
        };
      };
    };

    getAllData();
  }, [idb]);

  console.log(allUsers);
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -ml-[180px] bg-[#fff] top-14 pl-4 py-4 shadow-xl"
    >
      <div className="flex flex-col space-y-4 w-[200px]">
        <div className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
          <FaUser />
          <h2>My Account</h2>
        </div>
        <div className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
          <FaHeart />
          <h2>My Favorites</h2>
        </div>
        <div className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
          <FaPowerOff />
          <h2>Sign Out</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default UserAccordion;
