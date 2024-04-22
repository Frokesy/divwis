import { FC, useEffect, useState } from "react";

interface CategoryProps {
  pageId: string | undefined;
  filterProductsByCategory: (category: string) => void;
}

const Categories: FC<CategoryProps> = ({
  pageId,
  filterProductsByCategory,
}) => {
  const id = parseInt(pageId as string);
  const [activeCategory, setActiveCategory] = useState<number>();
  const categories = [
    {
      id: 6,
      name: "all products",
      quantity: 12,
    },
    {
      id: 1,
      name: "cereals",
      quantity: 20,
    },
    {
      id: 2,
      name: "fruits",
      quantity: 30,
    },
    {
      id: 3,
      name: "vegetables",
      quantity: 40,
    },
    {
      id: 4,
      name: "meat",
      quantity: 8,
    },
    {
      id: 5,
      name: "milk & dairy",
      quantity: 15,
    },
  ];

  const handleFilter = (id: number, category: string) => {
    setActiveCategory(id);
    filterProductsByCategory(category);
  };

  useEffect(() => {
    setActiveCategory(id);
  }, [id]);

  return (
    <div>
      <h2 className="text-[#333] text-[18px] font-semibold pt-6">Categories</h2>

      <div className="mt-2">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleFilter(category.id, category.name)}
            className={`flex items-center justify-between capitalize cursor-pointer py-2 ${
              activeCategory === category.id &&
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
