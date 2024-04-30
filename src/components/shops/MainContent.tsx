import FiveStars from "../svgs/stars/FiveStars";
import { products } from "../data/products";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  priceId?: string;
  review: string;
  productImg: string;
}

interface MainContentProps {
  filterType: string;
  productsPerRating: ProductsProps[];
  productsPerPrice: ProductsProps[];
  productsPerCategory: ProductsProps[];
  searchResults: ProductsProps[];
  handleClick: (product: ProductsProps) => void;
}
const MainContent: FC<MainContentProps> = ({
  filterType,
  productsPerRating,
  productsPerPrice,
  productsPerCategory,
  searchResults,
  handleClick
}) => {
  const [filteredProducts, setFilteredProducts] =
    useState<ProductsProps[]>(products);

  useEffect(() => {
    filterType === "rating" && setFilteredProducts(productsPerRating);
    filterType === "price" && setFilteredProducts(productsPerPrice);
    filterType === "category" && setFilteredProducts(productsPerCategory);
    filterType === "search" && setFilteredProducts(searchResults);
  }, [
    filterType,
    productsPerRating,
    productsPerPrice,
    productsPerCategory,
    searchResults,
  ]);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[100%] mt-10 lg:mt-0 mx-auto lg:gap-[1vw] gap-[3vh]">
        {filteredProducts.map((product) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={product.id}
            className="flex flex-col w-[100%] bg-[#fff] rounded-lg"
          >
            <div className="relative w-[100%] flex flex-col items-center">
              <div className="absolute top-0 left-0">
                <h2 className="bg-[#ff0406] rounded-tl-lg text-[#fff] text-[14px] font-semibold pl-3 pr-6 py-1 uppercase">
                  -12% off
                </h2>
              </div>
              <img
                src={product.productImg}
                alt="product"
                className="mt-10 lg:h-[200px] lg:w-[250px] w-[350px] h-[270px]"
              />
            </div>
            <div className="px-6">
              <h3 className="font-bold text-[18px] mt-4">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <FiveStars size="sm" />
                <span className="text-[12px] mt-1 text-[#808080]">
                  (5.2k reviews)
                </span>
              </div>
              <span className="pt-2 text-[#ff0406] font-bold text-[18px]">
                ${product.price}
              </span>
              <div
                onClick={() => handleClick(product)}
                className="border border-[#ff7c08] text-[#ff7c08] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out hover:text-[#fff] cursor-pointer my-6 py-3 rounded-lg flex items-center justify-center"
              >
                <p className="text-[18px] font-bold">Shop Now</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
