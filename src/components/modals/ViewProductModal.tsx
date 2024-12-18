import React, { FC, useEffect, useState } from "react";
import ModalContainer from "../wrappers/ModalContainer";
import FiveStars from "../svgs/stars/FiveStars";
import Loader from "../defaults/Loader";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Heart } from "../svgs/Icons";
import { ProductsProps } from "./CompareModal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductsProps | undefined;
}

const ViewProductModal: FC<ModalProps> = ({ isOpen, setIsOpen, product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [favoritedProducts, setFavoritedProducts] = useState<ProductsProps[]>(
    []
  );

  const handleClick = (cmd: string) => {
    cmd === "increment" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

  const addToCart = () => {
    setLoading(true);
    const item = {
      id: product?.id,
      name: product?.name,
      price: product?.default_price,
      priceId: product?.priceId,
      review: product?.review,
      productImg: product?.image,
      quantity: quantity,
    };

    const idb = window.indexedDB;
    const dbPromise = idb.open("divwis", 1);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;
      const tx = db.transaction("cart", "readwrite");
      const carts = tx.objectStore("cart");
      const addData = carts.put(item);

      addData.onsuccess = () => {
        tx.oncomplete = () => {
          setLoading(false);
          toast.success("Added to Cart!", {
            position: "top-center",
            theme: "light",
            autoClose: 500,
            hideProgressBar: true,
            draggable: true,
          });
          setTimeout(() => {
            setIsOpen(!isOpen);
          }, 2000);
          db.close();
        };
      };
    };
  };

  const handleLikedAnimation = (product: ProductsProps) => {
    const isLiked = favoritedProducts.some((p) => p.id === product.id);
    const dbPromise = idb.open("divwis", 1);

    if (isLiked) {
      setFavoritedProducts((prevFavoritedProducts) =>
        prevFavoritedProducts.filter((p) => p.id !== product.id)
      );

      dbPromise.onsuccess = function () {
        const db = dbPromise.result;
        const tx = db.transaction("favorites", "readwrite");
        const favorites = tx.objectStore("favorites");
        const deleteData = favorites.delete(product.id);

        deleteData.onsuccess = () => {
          tx.oncomplete = function () {
            db.close();
          };
        };
      };
    } else {
      setFavoritedProducts((prevFavoritedProducts) => [
        ...prevFavoritedProducts,
        product,
      ]);

      dbPromise.onsuccess = () => {
        const db = dbPromise.result;
        const tx = db.transaction("favorites", "readwrite");
        const favorites = tx.objectStore("favorites");
        const addData = favorites.put(product);

        addData.onsuccess = () => {
          tx.oncomplete = () => {
            db.close();
          };
        };
      };
    }
  };

  const idb = window.indexedDB;

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
            setFavoritedProducts((query.srcElement as IDBRequest).result);
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
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <ToastContainer />
      {product && (
        <div className="flex lg:flex-row flex-col justify-between items-center lg:space-x-10 lg:w-[60vw] w-[85vw] overflow-x-hidden overflow-y-auto">
          <div className="lg:w-[450px]">
            <img
              src={product.image}
              className="w-[100%] lg:h-[300px] h-[200px]"
              alt="productImg"
            />
            <div
              onClick={() => handleLikedAnimation(product)}
              className="flex justify-end cursor-pointer"
            >
              <Heart
                liked={favoritedProducts.some((p) => p.id === product.id)}
                size="big"
              />
            </div>
          </div>
          <div className="flex flex-col lg:w-[50%] w-[100%]">
            <h3 className="font-bold text-[24px] mt-2">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <div className="text-[#808080] flex items-center space-x-2 lg:mt-0 lg:text-[15px] mt-2 text-[13px]">
                <FiveStars />
                <p>{product.review}/5 (4.2k reviews)</p>
              </div>
            </div>
            <div className="flex space-x-3 text-[15px]">
              <span className="text-[#ff3b30] font-semibold">
                ${product.default_price}
              </span>
            </div>
            <h2 className="font-bold text-[18px] mt-6">Description</h2>
            <div className="">{product.desc}</div>

            <div className="mt-6">
              <h2 className="text-[18px] font-semibold mb-2">Quantity:</h2>
              <div className="flex">
                <p
                  onClick={() => handleClick("decrement")}
                  className="border border-[#ccc] px-3 cursor-pointer text-[20px] text-[#333] font-bold"
                >
                  -
                </p>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-[40px] border border-[#ccc] px-2 outline-none rounded-md"
                />
                <p
                  onClick={() => handleClick("increment")}
                  className="border border-[#ccc] px-3 cursor-pointer text-[20px] text-[#333] font-bold"
                >
                  +
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-3">
              <button
                onClick={addToCart}
                className="bg-[#ff7c08] text-[#fff] h-[40px] w-[120px] rounded-md flex items-center justify-center"
              >
                {loading ? <Loader /> : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

export default ViewProductModal;
