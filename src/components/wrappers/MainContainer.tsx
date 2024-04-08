import { FC, ReactNode, useState } from "react";
import Header from "../defaults/Header";
import NavMenu from "../defaults/NavMenu";
import PageTransition from "./PageTransition";
import Footer from "../defaults/Footer";
import BottomNav from "../defaults/BottomNav";
interface MainContainerProps {
  children: ReactNode;
}
const MainContainer: FC<MainContainerProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);
  return (
    <div>
      <Header />
      <NavMenu />
      {loading ? (
        <div>
          <PageTransition>{children}</PageTransition>
          <Footer />
          <BottomNav />
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <img src="/assets/preloader.gif" alt="preloader" className="w-[20rem]" />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
