import { useEffect, useState } from "react";
import FiveStars from "../svgs/stars/FiveStars";
import { motion } from "framer-motion";
import { Compare, Eye, Heart } from "../svgs/Icons";
import { products } from "../data/products";
import ViewProductModal from "../modals/ViewProductModal";
import CompareModal from "../modals/CompareModal";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../defaults/Loader";

interface ProductsProps {
  id: number;
  name: string;
  default_price: string;
  priceId?: string;
  review?: string;
  category: string;
  image: string;
}

const Trending = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<number | null>();
  const [iconHover, setIconHover] = useState<string>("");
  const [activeIcon, setActiveIcon] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [favoritedProducts, setFavoritedProducts] = useState<ProductsProps[]>(
    []
  );
  const [viewedProduct, setViewedProduct] = useState<ProductsProps>();
  const [productsPerCategory, setProductsPerCategory] =
    useState<ProductsProps[]>(products);

  const updateActiveState = (id: number | null) => {
    setActiveId(id);
  };
  const updateIconHover = (icon: string) => {
    setIconHover(icon);
  };

  const handleClick = (item: ProductsProps, icon: string) => {
    setIsOpen(true);
    setViewedProduct(item);

    icon === "eye" && setActiveIcon("eye");
    icon === "compare" && setActiveIcon("compare");
  };

  const idb = window.indexedDB;
  const request = idb.open("divwis", 1);
  request.onerror = (event) => {
    console.error("An error occurred with IndexedDB:", event);
  };

  request.onupgradeneeded = () => {
    const db = request.result;

    if (!db.objectStoreNames.contains("favorites")) {
      const objectStore = db.createObjectStore("favorites", { keyPath: "id" });
      console.log(objectStore);
    }
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

  const addToCart = (product: ProductsProps) => {
    setLoading(true);
    const item = {
      id: product?.id,
      name: product?.name,
      price: product?.default_price,
      priceId: product?.priceId,
      review: product?.review,
      productImg: product?.image,
      quantity: 1,
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
          db.close();
        };
      };
    };
  };

  useEffect(() => {
    if (activeTab === "all") {
      setProductsPerCategory(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === activeTab
      );
      setProductsPerCategory(filteredProducts);
    }
  }, [activeTab]);

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
    <div className=" mt-6 pt-[5vh] pb-[10vh]">
      <ToastContainer />
      <div className="flex lg:flex-row flex-col justify-between items-center w-[80vw] mx-auto">
        <h2 className="text-[26px] font-semibold">Top Trending Products</h2>

        <div className="lg:flex lg:space-x-6 grid grid-cols-3 place-items-center lg:text-[16px] text-[14px]">
          <span
            className={`cursor-pointer transition-all duration-200 ease-in-out ${
              activeTab === "all"
                ? "text-[#fa961e] font-semibold"
                : "text-[#333]"
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Products
          </span>
          <span
            className={`cursor-pointer transition-all duration-200 ease-in-out ${
              activeTab === "sea-food"
                ? "text-[#fa961e] font-semibold"
                : "text-[#333]"
            }`}
            onClick={() => setActiveTab("sea-food")}
          >
            Sea Food
          </span>
          <span
            className={`cursor-pointer transition-all duration-200 ease-in-out ${
              activeTab === "vegetables"
                ? "text-[#fa961e] font-semibold"
                : "text-[#333]"
            }`}
            onClick={() => setActiveTab("vegetables")}
          >
            Vegetables
          </span>
          <span className="lg:hidden"></span>
          <span
            className={`cursor-pointer transition-all duration-200 ease-in-out ${
              activeTab === "beans"
                ? "text-[#fa961e] font-semibold"
                : "text-[#333]"
            }`}
            onClick={() => setActiveTab("beans")}
          >
            Beans & Peas
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 lg:w-[80vw] w-[90vw] mx-auto gap-[2vw] mt-10">
        {productsPerCategory.slice(0, 4).map((product) => (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            onMouseEnter={() => updateActiveState(product.id)}
            onMouseLeave={() => updateActiveState(null)}
            onTouchMove={() => updateActiveState(product.id)}
            onTouchEnd={() => updateActiveState(null)}
            onScroll={() => updateActiveState(product.id)}
            key={product.id}
            className="flex flex-col w-[100%] border border-[#f1f1f1] hover:shadow-xl transition-shadow duration-500 ease-in-out rounded-md px-4 mt-10 pb-4 relative"
          >
            <div className="relative w-[100%] flex items-center">
              <img
                src={product.image}
                alt="product"
                className="object-cover lg:w-auto lg:h-[200px] w-[350px] h-[270px]"
              />

              {activeId === product.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="rounded-lg absolute top-4 w-[100%] h-[100%]"
                >
                  <div className="flex flex-col items-end h-[100%] space-y-3">
                    <div
                      onMouseEnter={() => updateIconHover("heart")}
                      onMouseLeave={() => updateIconHover("")}
                      className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
                      onClick={() => handleLikedAnimation(product)}
                    >
                      <Heart
                        iconHover={iconHover}
                        liked={favoritedProducts.some(
                          (p) => p.id === product.id
                        )}
                      />
                    </div>
                    <div
                      onMouseEnter={() => updateIconHover("eye")}
                      onMouseLeave={() => updateIconHover("")}
                      className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
                      onClick={() => handleClick(product, "eye")}
                    >
                      <Eye iconHover={iconHover} />
                    </div>
                    <div
                      onMouseEnter={() => updateIconHover("compare")}
                      onMouseLeave={() => updateIconHover("")}
                      className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
                      onClick={() => handleClick(product, "compare")}
                    >
                      <Compare iconHover={iconHover} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            <h3 className="font-bold text-[18px] mt-4">{product.name}</h3>
            <div className="flex items-center space-x-2 mb-2">
              <FiveStars size="sm" />
              <span className="text-[12px] mt-1 text-[#808080]">
                (5.2k reviews)
              </span>
            </div>
            <span className="pt-2 text-[#ff0406] font-bold text-[18px]">
              ${product.default_price}
            </span>
            <div className="w-[100%] bg-[#ecf0e8] my-3 rounded-lg">
              <div className="bg-[#6eb356] w-[60%] h-[8px] rounded-lg"></div>
            </div>
            <div className="flex items-center font-semibold text-[14px] space-x-2">
              <p className="text-[#404040]">Available:</p>
              <span className="text-[#ff7c08]">60/100</span>
            </div>
            <div className="h-[80px]">
              {activeId === product.id && (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => addToCart(product)}
                  className="bg-[#ff7c08] text-[#fff] hover:bg-[#6eb356] transition-colors duration-500 ease-in-out hover:text-[#fff] cursor-pointer my-6 py-3 rounded-lg flex items-center justify-center w-[100%] h-[50px]"
                >
                  {loading ? (
                    <Loader />
                  ) : (
                    <p className="text-[18px] font-bold">Add to cart</p>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {isOpen && activeIcon === "eye" && (
        <ViewProductModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          product={viewedProduct}
        />
      )}

      {isOpen && activeIcon === "compare" && (
        <CompareModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          product={viewedProduct}
        />
      )}
    </div>
  );
};
export default Trending;
