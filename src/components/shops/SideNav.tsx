import React, { FC } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";
import { products } from "../data/products";

interface SideNavProps {
  id: string | undefined;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setProductsPerPrice: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setProductsPerRating: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setProductsPerCategory: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
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
  setFilterType,
  setProductsPerPrice,
  setProductsPerRating,
  setProductsPerCategory
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

  const filterProductsByCategory = (category: string) => {

    const filteredProducts = products.filter(
      (product) => product.category == category
    );
    setProductsPerCategory(filteredProducts);
    setFilterType("category")
  };
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search />
      <Categories pageId={id} filterProductsByCategory={filterProductsByCategory} />
      <Filter filterProductsByPrice={filterProductsByPrice} />
      <Rating filterProductsByRating={filterProductsByRating} />
    </div>
  );
};

export default SideNav;
