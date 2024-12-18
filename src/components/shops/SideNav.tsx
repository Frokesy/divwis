import React, { FC, useEffect, useState } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";
import { getProducts } from "../data/products";

interface SideNavProps {
  id: string | undefined;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  setProductsPerPrice: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setProductsPerRating: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setProductsPerCategory: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  setSearchResult: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
}

interface ProductsProps {
  id: string;
  name: string;
  default_price: string;
  priceId?: string;
  review?: string;
  image: string;
  category: string;
  desc: string;
}

const SideNav: FC<SideNavProps> = ({
  id,
  setFilterType,
  setProductsPerPrice,
  setProductsPerRating,
  setProductsPerCategory,
  setSearchResult
}) => {
  const [products, setProducts] = useState<ProductsProps[]>([])
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

  const filterProductsByCategory = (category: string) => {
    const filteredProducts = products.filter(
      (product) => product.category == category
    );
    category === "all products"
      ? setProductsPerCategory(products)
      : setProductsPerCategory(filteredProducts);
    setFilterType("category");
  };

  const filterBySearch = (searchInput: string) => {
    const filteredSearch = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(filteredSearch);
    setFilterType("search")
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search filterBySearch={filterBySearch} />
      <Categories
        products={products}
        pageId={id}
        filterProductsByCategory={filterProductsByCategory}
      />
      <Filter filterProductsByPrice={filterProductsByPrice} />
      <Rating filterProductsByRating={filterProductsByRating} />
    </div>
  );
};

export default SideNav;
