import { useEffect, useState } from "react";
import MainContainer from "../../components/wrappers/MainContainer";
import { FaTrashAlt } from "react-icons/fa";
import ViewProductModal from "../../components/modals/ViewProductModal";
import { NavLink } from "react-router-dom";

interface FavoriteProps {
  id: number;
  name: string;
  default_price: string;
  image: string;
  review: string;
  active: boolean;
  category: string;
  created_at: string;
  desc: string;
  featured: boolean;
  priceId: string
}

const Favorites = () => {
  const [data, setData] = useState<FavoriteProps[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [viewedProduct, setViewedProduct] = useState<FavoriteProps>();

  const idb = window.indexedDB;
  // const id = localStorage.getItem("id");

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

  const handleClick = (item: FavoriteProps) => {
    setIsOpen(true);
    setViewedProduct(item);
  };

  const removeFromFavorites = (item: FavoriteProps) => {
    const dbPromise = idb.open("divwis", 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("favorites", "readwrite");
      const favorites = tx.objectStore("favorites");
      const deleteData = favorites.delete(item.id);

      deleteData.onsuccess = () => {
        tx.oncomplete = function () {
          getAllData();
          db.close();
        };
      };
    };
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <MainContainer active="favorites">
      <div className="lg:w-[80vw] w-[90vw] mx-auto py-[15vh] min-h-[80vh]">
        <h2 className="lg:text-[22px] text-[20px] font-bold font-mono lg:text-[#808080]">
          Favorites({data.length})
        </h2>

        {data.length === 0 ? (
          <div className="flex items-center justify-center h-[50vh]">
            <p className="text-[#808080] font-mono">
              You have not liked any product yet, please proceed to{" "}
              <NavLink className="text-[#6eb356] font-semibold" to="/shops/0">
                shop here
              </NavLink>
            </p>
          </div>
        ) : (
          <div className="space-y-6 mt-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 justify-between border-2 rounded-lg lg:p-6 p-3 border-[#ccc]"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    className="w-[104px] object-cover h-[104px]"
                    alt="img"
                  />
                  <div className="flex flex-col">
                    <h2 className="mb-3 text-[16px] font-semibold">
                      {item.name}
                    </h2>
                    <p className="text-[14px] text-[#e05d00] font-semibold">${item.default_price}</p>
                    <p className="text-[14px] pt-1">Review: {item.review ? item.review : 0}/5</p>
                  </div>
                </div>

                <div className="flex flex-col pt-3 space-y-6">
                  <button
                    onClick={() => handleClick(item)}
                    className="uppercase bg-[#6eb356] hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] lg:py-2 py-1 lg:px-6 px-4 font-semibold rounded-lg"
                  >
                    buy now
                  </button>

                  <button
                    onClick={() => removeFromFavorites(item)}
                    className="flex items-center space-x-3 text-[14px] font-semibold text-[#ed071e] justify-center uppercase"
                  >
                    <FaTrashAlt />
                    <span>remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <ViewProductModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          product={viewedProduct}
        />
      )}
    </MainContainer>
  );
};

export default Favorites;
