import { useEffect, useState } from "react";
import MainContainer from "../../components/wrappers/MainContainer";
import { FaTrashAlt } from "react-icons/fa";

interface FavoriteProps {
  id: number;
  name: string;
  price: string;
  productImg: string;
  review: string;
}

const Favorites = () => {
  const [data, setData] = useState<FavoriteProps[]>([]);
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

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <MainContainer active="favorites">
      <div className="lg:w-[80vw] w-[90vw] mx-auto py-[15vh]">
        <h2 className="lg:text-[22px] text-[20px] font-bold font-mono lg:text-[#808080]">
          Favorites({data.length})
        </h2>

        <div className="space-y-6 mt-10">
          {data.map((item) => (
            <div key={item.id} className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 justify-between border-2 rounded-lg lg:p-6 p-3 border-[#ccc]">
              <div className="flex items-center space-x-4">
                <img
                  src={item.productImg}
                  className="w-[104px] object-cover h-[104px]"
                  alt="img"
                />
                <div className="flex flex-col">
                  <h2 className="mb-3 text-[16px] font-semibold">{item.name}</h2>
                  <p className="text-[14px]">{item.price}</p>
                  <p className="text-[14px] pt-1">Review: {item.review}/5</p>
                </div>
              </div>

              <div className="flex flex-col pt-3 space-y-6">
                <button className="uppercase bg-[#6eb356] hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] lg:py-2 py-1 lg:px-6 px-4 font-semibold rounded-lg">buy item</button>

                <button className="flex items-center space-x-3 text-[14px] font-semibold text-[#ed071e] justify-center uppercase">
                  <FaTrashAlt />
                  <span>remove</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainContainer>
  );
};

export default Favorites;
