import { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";
import { FC } from "react";

interface CategoryProps {
  pageId: string | undefined;
}

const Filter: FC<CategoryProps> = ({ pageId }) => {
  const [selectedFilter, setSelectedFilter] = useState("By Category");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const categories = [
    { id: 1, name: "Cereals" },
    { id: 2, name: "Fruits" },
    { id: 3, name: "Vegetables" },
    { id: 4, name: "Meat" },
    { id: 5, name: "Milk & Dairy" },
  ];
  const id = parseInt(pageId as string);

  return (
    <div>
      <div className="flex justify-between items-center mb-2 pt-6">
        <h3 className="font-semibold text-[18px]">Filter</h3>
        <select
          name=""
          id=""
          className="text-[13px] bg-inherit outline-none"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option>By Category</option>
          <option>By Price</option>
        </select>
      </div>
      {selectedFilter === "By Category" && (
        <div>
          {categories.map((category) => (
            <label key={category.id} className="flex items-center mb-2">
              {category.id === id ? (
                <input type="checkbox" className="mr-2" defaultChecked />
              ) : (
                <input type="checkbox" className="mr-2" />
              )}
              <span className="text-[#333] text-[14px]">{category.name}</span>
            </label>
          ))}
        </div>
      )}

      {selectedFilter === "By Price" && <PriceRangeSlider />}
    </div>
  );
};

export default Filter;
