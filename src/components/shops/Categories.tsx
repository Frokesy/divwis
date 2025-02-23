import { FC, useEffect } from "react";
import { ProductsProps } from "../modals/CompareModal";

interface CategoryProps {
  pageId: string | undefined;
  filterProductsByCategory: (category: string) => void;
  products: ProductsProps[];
  activeCategoryId: number | undefined;
  setActiveCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Categories: FC<CategoryProps> = ({
  pageId,
  filterProductsByCategory,
  products,
  activeCategoryId,
  setActiveCategoryId,

}) => {
  const id = parseInt(pageId as string);
  
  const categories = [
    {
      id: 0,
      name: "all products",
      tag: "all products",
      quantity: products.length,
    },
    {
      id: 1,
      name: "Cereals",
      tag: "cereals",
      quantity: products.filter((product) => product.category === "cereals").length,
    },
    {
      id: 2,
      name: "Fruits",
      tag: "fruits",
      quantity: products.filter((product) => product.category === "fruits").length,
    },
    {
      id: 3,
      name: "Vegetables",
      tag: "vegetables",
      quantity: products.filter((product) => product.category === "vegetables").length,
    },
    {
      id: 4,
      name: "Meat",
      tag: "meat",
      quantity: products.filter((product) => product.category === "meat").length,
    },
    {
      id: 5,
      name: "Milk & Dairy",
      tag: "milk&dairy",
      quantity: products.filter((product) => product.category === "milk&dairy").length,
    },
  ];

  const handleFilter = (id: number, category: string) => {
    setActiveCategoryId(id);
    filterProductsByCategory(category);
  };

  useEffect(() => {
    setActiveCategoryId(id);
  }, [id]);

  return (
    <div>
      <h2 className="text-[#333] text-[18px] font-semibold pt-6">Categories</h2>

      <div className="mt-2">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleFilter(category.id, category.tag)}
            className={`flex items-center justify-between capitalize cursor-pointer py-2 ${
              activeCategoryId === category.id &&
              "bg-[#f1f1f1] pl-2 rounded-lg transition-all duration-500 ease-in-out"
            }`}
          >
            <h2 className="text-[#333] text-[14px]">{category.name}</h2>
            <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
              {category.quantity < 10
                ? `0${category.quantity}`
                : category.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
