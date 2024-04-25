import Categories from "../../components/sections/Categories";
import FeaturedProducts from "../../components/sections/FeaturedProducts";
import HeroSection from "../../components/sections/HeroSection";
import Trending from "../../components/sections/Trending";
import MainContainer from "../../components/wrappers/MainContainer";

const Home = () => {
  return (
    <MainContainer active="home">
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Trending />
    </MainContainer>
  );
};

export default Home;
