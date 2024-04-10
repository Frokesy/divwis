import { FC } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Rating from "./Rating";
import Search from "./Search";

interface SideNavProps {
  id: string | undefined;
}

const SideNav: FC<SideNavProps> = ({ id }) => {
  return (
    <div className="bg-[#fff] px-3 py-4 rounded-lg shadow-md">
      <Search />
      <Categories pageId={id} />
      <Filter />
      <Rating />
    </div>
  );
};

export default SideNav;
