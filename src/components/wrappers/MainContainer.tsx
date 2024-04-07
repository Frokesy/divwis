import { FC, ReactNode, useState } from "react";
import Header from "../defaults/Header";
import NavMenu from "../defaults/NavMenu";
import PageTransition from "./PageTransition";
import Footer from "../defaults/Footer";
import BottomNav from "../defaults/BottomNav";
import Logo from "../defaults/Logo";

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
      {loading ? (
        <div>
          <Header />
          <NavMenu />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <BottomNav />
        </div>
      ) : (
        <div className="">
          <Logo />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
