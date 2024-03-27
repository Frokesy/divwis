import { useEffect, useState } from "react";
import FiveStars from "../svgs/stars/FiveStars";
import { motion } from "framer-motion";
import { Compare, Eye, Heart } from "../svgs/Icons";
import { products } from "../data/products";

const Trending = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [activeId, setActiveId] = useState<number | null>();
  const [iconHover, setIconHover] = useState<string>("");
  const [productsPerCategory, setProductsPerCategory] =  useState([]);

  const updateActiveState = (id: number | null) => {
    setActiveId(id);
  };
  const updateIconHover = (icon: string) => {
    setIconHover(icon);
  };

  
  return (
    <div className=" mt-6 pt-[5vh] pb-[10vh]">
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
        {products.map((product) => (
          <div
            onMouseEnter={() => updateActiveState(product.id)}
            onMouseLeave={() => updateActiveState(null)}
            key={product.id}
            className="flex flex-col w-[100%] border border-[#f1f1f1] hover:shadow-xl transition-shadow duration-500 ease-in-out rounded-md px-4 mt-10 pb-4 relative"
          >
            <div className="relative w-[100%] flex items-center">
              <img
                src={product.productImg}
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
                    >
                      <Heart iconHover={iconHover} />
                    </div>
                    <div
                      onMouseEnter={() => updateIconHover("eye")}
                      onMouseLeave={() => updateIconHover("")}
                      className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
                    >
                      <Eye iconHover={iconHover} />
                    </div>
                    <div
                      onMouseEnter={() => updateIconHover("compare")}
                      onMouseLeave={() => updateIconHover("")}
                      className="bg-[#fff] hover:bg-[#a4c059] cursor-pointer transition-colors duration-500 ease-in-out p-2 rounded-full"
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
              {product.price}
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
                  className="bg-[#ff7c08] text-[#fff] hover:bg-[#6eb356] transition-colors duration-500 ease-in-out hover:text-[#fff] cursor-pointer my-6 py-3 rounded-lg flex items-center justify-center"
                >
                  <p className="text-[18px] font-bold">Add to cart</p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Trending;
