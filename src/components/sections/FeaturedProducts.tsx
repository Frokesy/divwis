import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compare, Eye, Heart } from "../svgs/Icons";
import ViewProductModal from "../modals/ViewProductModal";
import CompareModal from "../modals/CompareModal";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  review: string;
  productImg: string;
}

const FeaturedProducts = () => {
  const [activeId, setActiveId] = useState<number | null>();
  const [iconHover, setIconHover] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [viewedProduct, setViewedProduct] = useState<ProductsProps>();
  const [favoritedProducts, setFavoritedProducts] = useState<ProductsProps[]>(
    []
  );
  const [activeIcon, setActiveIcon] = useState<string>("");

  const products = [
    {
      id: 1,
      name: "Strawberry Fruit",
      price: "$100.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-1.png",
    },
    {
      id: 2,
      name: "Green Apple",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-2.png",
    },
    {
      id: 3,
      name: "Red Apple",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-3.png",
    },
    {
      id: 4,
      name: "Banana",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-4.png",
    },
    {
      id: 5,
      name: "Broyler Chicken",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-5.png",
    },
    {
      id: 6,
      name: "Orange Juice",
      price: "$150.00",
      review: "4.5",
      productImg: "/assets/products/pago.png",
    },
    {
      id: 7,
      name: "Grapes",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-4.png",
    },
    {
      id: 8,
      name: "Tomatoes",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-2.png",
    },
    {
      id: 0,
      name: "Tomatoes",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-2.png",
    },
  ];

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
      db.createObjectStore("favorites", { keyPath: "id" });
    }
    if (!db.objectStoreNames.contains("cart")) {
      db.createObjectStore("cart", { keyPath: "id" });
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
    <div className=" mt-6 pt-[15vh] bg-[#eef6eb]">
      <h2 className="font-bold lg:text-[32px] text-[26px] text-center">
        Featured Brand Products
      </h2>
      <p className="text-center lg:text-[16px] text-[13px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor.
      </p>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-[1vw] lg:gap-y-0 gap-y-4 lg:w-[80vw] w-[90vw] mx-auto mt-10">
        <div className="w-[100%] space-y-4">
          {products.map(
            (product) =>
              product.id > 4 && (
                <div
                  key={product.id}
                  className="flex lg:flex-row flex-col lg:space-x-3 rounded-lg p-2 bg-[#fff]"
                  onMouseEnter={() => updateActiveState(product.id)}
                  onMouseLeave={() => updateActiveState(null)}
                >
                  <div className="bg-[#f1f1f1] lg:w-[250px] rounded-lg relative">
                    {activeId === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="bg-[#000] bg-opacity-50 rounded-lg absolute top-0 w-[100%] h-[100%]"
                      >
                        <div className="flex items-center justify-center h-[100%] space-x-2">
                          <div
                            onMouseEnter={() => updateIconHover("heart")}
                            onMouseLeave={() => updateIconHover("")}
                            onClick={() => handleLikedAnimation(product)}
                            className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
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
                    <img
                      src={product.productImg}
                      alt="product"
                      className="lg:w-[100%] lg:h-[120px] w-[350px] h-[270px]"
                    />
                  </div>
                  <div className="flex flex-col w-[100%]">
                    <div className="flex items-center space-x-2">
                      <div className="text-[#808080] lg:mt-0 lg:text-[15px] mt-2 text-[13px]">
                        {product.review}/5 (4.2k reviews)
                      </div>
                    </div>
                    <h3 className="font-bold text-[18px] mt-2">
                      {product.name}
                    </h3>
                    <div className="flex space-x-3 text-[15px] mt-2">
                      <span className="text-[#808080] line-through">
                        $200.00
                      </span>
                      <span className="text-[#ff3b30] font-semibold">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-[14px] mt-2 text-[#19483a]">Shop Now</p>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="lg:block hidden">
          {products.map(
            (product) =>
              product.id === 0 && (
                <div
                  key={product.id}
                  className="bg-[#fff] flex flex-col pt-10 px-6"
                >
                  <p className="italic text-[#fa961e] font-semibold text-[13px]">
                    100% organic products
                  </p>
                  <h2 className="pt-2 font-bold text-[18px]">Fresh Fruits</h2>
                  <h1 className="font-bold text-[22px]">Healthy Juice</h1>
                  <span className="text-[#808080] text-[14px]">
                    Get 50% Off on Selected Organic Items
                  </span>
                  <div className="mt-3">
                    <button className="bg-[#fa961e] hover:bg-[#a4c059] transition-colors duration-500 ease-in-out text-[#fff] py-3 px-6 font-semibold">
                      Shop Now
                    </button>
                  </div>
                  <img
                    src="/assets/products/pago.png"
                    alt="pago"
                    className="h-[360px] w-[100%]"
                  />
                </div>
              )
          )}
        </div>

        <div className="w-[100%] space-y-4">
          {products.map(
            (product) =>
              product.id < 4 && (
                <div
                  key={product.id}
                  className="flex lg:flex-row flex-col lg:space-x-3 rounded-lg p-2 bg-[#fff]"
                  onMouseEnter={() => updateActiveState(product.id)}
                  onMouseLeave={() => updateActiveState(null)}
                >
                  <div className="bg-[#f1f1f1] lg:w-[250px] rounded-lg relative">
                    {activeId === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="bg-[#000] bg-opacity-50 rounded-lg absolute top-0 w-[100%] h-[100%]"
                      >
                        <div className="flex items-center justify-center h-[100%] space-x-2">
                          <div
                            onMouseEnter={() => updateIconHover("heart")}
                            onMouseLeave={() => updateIconHover("")}
                            onClick={() => handleLikedAnimation(product)}
                            className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
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
                    <img
                      src={product.productImg}
                      alt="product"
                      className="lg:w-[100%] lg:h-[120px] w-[350px] h-[270px]"
                    />
                  </div>
                  <div className="flex flex-col w-[100%]">
                    <div className="flex items-center space-x-2">
                      <div className="text-[#808080] lg:mt-0 lg:text-[15px] mt-2 text-[13px]">
                        {product.review}/5 (4.2k reviews)
                      </div>
                    </div>
                    <h3 className="font-bold text-[18px] mt-2">
                      {product.name}
                    </h3>
                    <div className="flex space-x-3 text-[15px] mt-2">
                      <span className="text-[#808080] line-through">
                        $200.00
                      </span>
                      <span className="text-[#ff3b30] font-semibold">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-[14px] mt-2 text-[#19483a]">Shop Now</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <img src="/assets/bg-shape-2.png" alt="bg" className="pt-[15vh]" />

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

export default FeaturedProducts;
