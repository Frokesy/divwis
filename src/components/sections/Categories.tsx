import { FC, useState } from "react";
import { Cereals, Fruits, Meat, Milk, Vegetables } from "../svgs/Icons";
import { FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductsProps } from "../modals/CompareModal";

interface CategoriesProps {
  products: ProductsProps[];
}

const Categories: FC<CategoriesProps> = ({ products }) => {
  const [activeId, setActiveId] = useState<number>();

  const categories = [
    {
      id: 1,
      name: "Cereals",
      tag: "cereals",
      icon: <Cereals />,
      borderColor: "#ff3b30",
      bgColor: "#f9e7e6",
    },
    {
      id: 2,
      name: "Fruits",
      tag: "fruits",
      icon: <Fruits />,
      borderColor: "#fa961e",
      bgColor: "#ede2d4",
    },
    {
      id: 3,
      name: "Vegetables",
      tag: "vegetables",
      icon: <Vegetables />,
      borderColor: "#aed581",
      bgColor: "#e9f3dd",
    },
    {
      id: 4,
      name: "Meat",
      tag: "meat",
      icon: <Meat />,
      borderColor: "#c1694f",
      bgColor: "#eeddd8",
    },
    {
      id: 5,
      name: "Milk & Dairy",
      tag: "milk&dairy",
      icon: <Milk />,
      borderColor: "#67dde0",
      bgColor: "#d9f2f2",
    },
  ];

  const categoryCounts = categories.map((category) => {
    const count = products.filter(
      (product) => product.category === category.tag
    ).length;
    return { ...category, count };
  });

  const updateArrowState = (id: number) => {
    setActiveId(id);
  };

  return (
    <div className="pt-[15vh]">
      <div className="relative">
        <div className="absolute z-10 w-[100%] flex items-center justify-center lg:-top-6 -top-4">
          <h2 className="font-bold lg:text-[32px] text-[26px] bg-[#fff] px-3">
            Our top categories
          </h2>
        </div>
        <div className="lg:w-[80vw] w-[90vw] mx-auto flex lg:flex-row justify-between flex-col lg:space-y-0 space-y-10 p-10 relative border border-dashed z-0 bg-[#fff] border-[#ff973a] rounded-lg">
          {categoryCounts.map((category) => (
            <div
              key={category.id}
              className="flex flex-col relative border border-[#f9e7e6] rounded-md py-6 px-12 items-center"
              onMouseLeave={() => updateArrowState(0)}
              onMouseEnter={() => updateArrowState(category.id)}
              onTouchMove={() => updateArrowState(category.id)}
              onScroll={() => updateArrowState(category.id)}
            >
              <div
                style={{ borderColor: category.borderColor }}
                className="border border-dashed p-2 rounded-[100%] hover:scale-125 transition-transform duration-700 ease-in-out"
              >
                <div
                  style={{ background: category.bgColor }}
                  className="p-4 rounded-[100%]"
                >
                  {category.icon}
                </div>
              </div>
              <h3 className="font-bold text-[18px] mt-4">{category.name}</h3>
              <div className="flex items-center space-x-2">
                <div
                  style={{ background: category.borderColor }}
                  className="p-1 rounded-full"
                ></div>
                <span className="text-[#333]">{category.count} items</span>
              </div>
              {activeId === category.id && (
                <NavLink to={`/shops/${category.id}`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`bg-[#ff7c08] absolute bottom-0 right-0 p-2 rounded-br-md`}
                  >
                    <FaArrowUp className="rotate-45" fill="#fff" />
                  </motion.div>
                </NavLink>
              )}
            </div>
          ))}
        </div>
        <div className="pb-[10vh] absolute top-[15vh] -z-10 lg:block hidden">
          <img src="/assets/bg-shape.png" alt="bg-shape" className="h-[30vh]" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
