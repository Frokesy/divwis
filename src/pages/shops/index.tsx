import { useParams } from "react-router-dom";
import MainContent from "../../components/shops/MainContent";
import SideNav from "../../components/shops/SideNav";
import MainContainer from "../../components/wrappers/MainContainer";
import { useState } from "react";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  review: string;
  productImg: string;
}

const Shops = () => {
  const { category_id } = useParams();

  const [productsPerRating, setProductsPerRating] = useState<ProductsProps[]>(
    []
  );
  const [filterType, setFilterType] = useState<string>("");
  return (
    <MainContainer>
      <div className="bg-[#f1f1f1] min-h-[80vh] pb-[10vh] lg:pt-10 pt-4">
        <div className="flex lg:w-[80vw] w-[95vw] mx-auto lg:flex-row flex-col justify-between pt-[10vh]">
          <div className="lg:w-[22%]">
            <SideNav
              productsPerRating={productsPerRating}
              id={category_id}
              setProductsPerRating={setProductsPerRating}
              setFilterType={setFilterType}
            />
          </div>
          <div className="main lg:w-[76%]">
            <MainContent filterType={filterType} productsPerRating={productsPerRating} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Shops;
