import { useParams } from "react-router-dom";
import MainContent from "../../components/shops/MainContent";
import SideNav from "../../components/shops/SideNav";
import MainContainer from "../../components/wrappers/MainContainer";
import { useState } from "react";
import ViewProductModal from "../../components/modals/ViewProductModal";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  priceId?: string;
  review?: string;
  image: string;
}

const Shops = () => {
  const { category_id } = useParams();

  const [productsPerRating, setProductsPerRating] = useState<ProductsProps[]>(
    []
  );
  const [productsPerPrice, setProductsPerPrice] = useState<ProductsProps[]>([]);
  const [productsPerCategory, setProductsPerCategory] = useState<
    ProductsProps[]
  >([]);
  const [searchResults, setSearchResult] = useState<ProductsProps[]>([]);
  const [filterType, setFilterType] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [viewedProduct, setViewedProduct] = useState<ProductsProps>();

  const handleClick = (item: ProductsProps) => {
    setIsOpen(true);
    setViewedProduct(item);
  };
  return (
    <MainContainer active="shop">
      <div className="bg-[#f1f1f1] min-h-[80vh] pb-[10vh] lg:pt-10 pt-4">
        <div className="flex lg:w-[80vw] w-[95vw] mx-auto lg:flex-row flex-col justify-between pt-[10vh]">
          <div className="lg:w-[22%]">
            <SideNav
              id={category_id}
              setFilterType={setFilterType}
              setProductsPerRating={setProductsPerRating}
              setProductsPerPrice={setProductsPerPrice}
              setProductsPerCategory={setProductsPerCategory}
              setSearchResult={setSearchResult}
            />
          </div>
          <div className="main lg:w-[76%]">
            <MainContent
              filterType={filterType}
              handleClick={handleClick}
              productsPerRating={productsPerRating}
              productsPerPrice={productsPerPrice}
              productsPerCategory={productsPerCategory}
              searchResults={searchResults}
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <ViewProductModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          product={viewedProduct}
        />
      )}
    </MainContainer>
  );
};

export default Shops;
