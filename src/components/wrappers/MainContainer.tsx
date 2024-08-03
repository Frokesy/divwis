import { FC, ReactNode, useState } from "react";
import Header from "../defaults/Header";
import NavMenu from "../defaults/NavMenu";
import PageTransition from "./PageTransition";
import Footer from "../defaults/Footer";
import BottomNav from "../defaults/BottomNav";
interface MainContainerProps {
  children: ReactNode;
  active: string;
}
const MainContainer: FC<MainContainerProps> = ({ children, active }) => {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(true);
  }, 300);
  return (
    <div>
      {loading ? (
        <div>
          <Header />
          <NavMenu />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <BottomNav active={active} />
        </div>
      ) : (
        <div className="flex justify-center bg-[#f1f1f2] items-center min-h-screen">
          <img
            src="/assets/preloader.gif"
            alt="preloader"
          />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
