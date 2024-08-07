import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { FaHeart, FaPowerOff, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface UserAccordionProps {
  logout: () => void;
}
const UserAccordion: FC<UserAccordionProps> = ({ logout }) => {
  const [data, setData] = useState([]);
  const idb = window.indexedDB;
  const id = localStorage.getItem("id");

  useEffect(() => {
    const getAllData = () => {
      const dbPromise = idb.open("divwis", 1);
      dbPromise.onsuccess = () => {
        const db = dbPromise.result;

        const tx = db.transaction("favorites", "readonly");
        const favorites = tx.objectStore("favorites");
        const data = favorites.getAll();

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

    getAllData();
  }, [idb]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute -ml-[180px] bg-[#fff] top-14 pl-4 py-4 shadow-xl"
    >
      <div className="flex flex-col space-y-4 w-[200px]">
        <NavLink
          to="/account"
          className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <FaUser />
          <h2>My Account</h2>
        </NavLink>
        <div className="flex justify-between items-center pr-3">
          <NavLink to="/favorites" className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out">
            <FaHeart />
            <h2>My Favorites</h2>
          </NavLink>
          <p className="text-[14px] bg-[#6eb356] px-1.5 text-[#fff] rounded-full">
            {data.length}
          </p>
        </div>
        <div
          onClick={() => (id ? logout() : console.log("clicked"))}
          className="flex items-center space-x-2 hover:text-[#6eb356] hover:pl-2 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <FaPowerOff />
          <h2>Sign Out</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default UserAccordion;
