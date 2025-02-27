import { useParams } from "react-router-dom";
import MainContent from "../../components/shops/MainContent";
import SideNav from "../../components/shops/SideNav";
import MainContainer from "../../components/wrappers/MainContainer";
import { useEffect, useState } from "react";
import ViewProductModal from "../../components/modals/ViewProductModal";
import { ProductsProps } from "../../components/modals/CompareModal";
import { getProducts } from "../../components/data/products";

const Shops = () => {
  const { category_tag } = useParams();
  const [products, setProducts] = useState<ProductsProps[]>([]);

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

  
  useEffect(() => {
    const filterProductsByCategory = () => {
      const filteredProducts = products.filter(
        (product) => product.category == category_tag
      );
      category_tag === "all products"
        ? setProductsPerCategory(products)
        : setProductsPerCategory(filteredProducts);
      setFilterType("category");
    };

    filterProductsByCategory();

  }, [category_tag, products])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      fetchedProducts && setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  return (
    <MainContainer active="shop">
      <div className="bg-[#f1f1f1] min-h-[80vh] pb-[10vh] lg:pt-10 pt-4">
        <div className="flex lg:w-[80vw] w-[95vw] mx-auto lg:flex-row flex-col justify-between pt-[10vh]">
          <div className="lg:w-[22%]">
            <SideNav
              category_tag={category_tag}
              products={products}
              setFilterType={setFilterType}
              setProductsPerRating={setProductsPerRating}
              setProductsPerPrice={setProductsPerPrice}
              setSearchResult={setSearchResult}
            />
          </div>
          <div className="main lg:w-[76%]">
            <MainContent
              filterType={filterType}
              products={products}
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
