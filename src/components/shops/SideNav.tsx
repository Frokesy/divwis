import React, { FC } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";
import { ProductsProps } from "../modals/CompareModal";

interface SideNavProps {
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setProductsPerPrice: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setProductsPerRating: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setSearchResult: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  products: ProductsProps[];
  category_tag: string | undefined;
}

const SideNav: FC<SideNavProps> = ({
  setFilterType,
  setProductsPerPrice,
  setProductsPerRating,
  setSearchResult,
  products,
  category_tag
}) => {
  const filterProductsByRating = (rating: number) => {
    const filteredProducts = products.filter(
      (product) => parseFloat(product.review as string) === rating
    );

    setProductsPerRating(filteredProducts);
    setFilterType("rating");
  };

  const filterProductsByPrice = (minPrice: number, maxPrice: number) => {
    const filteredProducts = products.filter(
      (product) =>
        parseFloat(product.default_price) >= minPrice &&
        parseFloat(product.default_price) <= maxPrice
    );

    setProductsPerPrice(filteredProducts);
    setFilterType("price");
  };

  const filterBySearch = (searchInput: string) => {
    const filteredSearch = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(filteredSearch);
    setFilterType("search")
  };


  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search filterBySearch={filterBySearch} />
      <Categories
      category_tag={category_tag}
        products={products}
      />
      <Filter filterProductsByPrice={filterProductsByPrice} />
      <Rating filterProductsByRating={filterProductsByRating} />
    </div>
  );
};

export default SideNav;
