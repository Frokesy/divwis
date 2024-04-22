import React, { FC } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";
import { products } from "../data/products";

interface SideNavProps {
  id: string | undefined;
  setProductsPerPrice: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setProductsPerRating: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
}

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  review: string;
  productImg: string;
}

const SideNav: FC<SideNavProps> = ({
  id,
  setProductsPerPrice,
  setProductsPerRating,
  setFilterType,
}) => {
  const filterProductsByRating = (rating: number) => {
    const filteredProducts = products.filter(
      (product) => parseFloat(product.review) === rating
    );

    setProductsPerRating(filteredProducts);
    setFilterType("rating");
  };

  const filterProductsByPrice = (minPrice: number, maxPrice: number) => {
    const filteredProducts = products.filter(
      (product) =>
        parseFloat(product.price) >= minPrice &&
        parseFloat(product.price) <= maxPrice
    );

    setProductsPerPrice(filteredProducts);
    setFilterType("price");
  };
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search />
      <Categories pageId={id} />
      <Filter filterProductsByPrice={filterProductsByPrice} />
      <Rating filterProductsByRating={filterProductsByRating} />
    </div>
  );
};

export default SideNav;
