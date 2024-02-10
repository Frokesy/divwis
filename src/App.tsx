import Footer from "./components/defaults/Footer"
import Header from "./components/defaults/Header"
import NavMenu from "./components/defaults/NavMenu"
import Categories from "./components/sections/Categories"
import FeaturedProducts from "./components/sections/FeaturedProducts"
import HeroSection from "./components/sections/HeroSection"
import Trending from "./components/sections/Trending"

function App() {

  return (
    <div>
      <Header />
      <NavMenu />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <Trending />
      <Footer />
    </div>
  )
}

export default App
