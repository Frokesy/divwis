import { FC } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";
import { products } from "../data/products";

interface SideNavProps {
  id: string | undefined;
  productsPerRating: ProductsProps[];
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
  productsPerRating,
  setProductsPerRating,
  setFilterType
}) => {

  const filterProductsByRating = (rating: number) => {
    const filteredProducts = products.filter(
      (product) => parseFloat(product.review) === rating
    );

    setProductsPerRating(filteredProducts);
    setFilterType("rating")
  };
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search />
      <Categories pageId={id} />
      <Filter />
      <Rating
        filterProductsByRating={filterProductsByRating}
        productsPerRating={productsPerRating}
      />
    </div>
  );
};

export default SideNav;
