import { FC, ReactNode } from "react";
import Header from "../defaults/Header";
import NavMenu from "../defaults/NavMenu";
import PageTransition from "./PageTransition";
import Footer from "../defaults/Footer";
import BottomNav from "../defaults/BottomNav";

interface MainContainerProps {
  children: ReactNode;
}
const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <NavMenu />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <BottomNav />
    </div>
  );
};

export default MainContainer;
