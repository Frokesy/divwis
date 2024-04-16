import { FC } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";
import { products } from "../data/products";
import { useState } from "react";

interface SideNavProps {
  id: string | undefined;
}

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  review: string;
  productImg: string;
}

const SideNav: FC<SideNavProps> = ({ id }) => {
  const [productsPerRating, setProductsPerRating] = useState<ProductsProps[]>(
    []
  );

  const filterProductsByRating = (rating: number) => {
    const filteredProducts = products.filter(
      (product) => parseFloat(product.review) === rating
    );

    setProductsPerRating(filteredProducts);
  };
  console.log(productsPerRating);
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search />
      <Categories pageId={id} />
      <Filter />
      <Rating filterProductsByRating={filterProductsByRating} productsPerRating={productsPerRating} />
    </div>
  );
};

export default SideNav;
