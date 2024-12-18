import { useEffect, useState } from "react";
import Categories from "../../components/sections/Categories";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import HeroSection from "../../components/sections/HeroSection";
import Trending from "../../components/sections/Trending";
import MainContainer from "../../components/wrappers/MainContainer";
import { ProductsProps } from "../../components/modals/CompareModal";
import { getProducts } from "../../components/data/products";

const Home = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);
  return (
    <MainContainer active="home">
      <HeroSection />
      <Categories />
      <FeaturedProducts products={products} />
      <Trending products={products} />
    </MainContainer>
  );
};

export default Home;
