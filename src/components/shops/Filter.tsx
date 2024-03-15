import { useState } from "react";
import PriceRangeSlider from "./PriceRangeSlider";

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState("By Category");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

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
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#333] text-[14px]">Cereals</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#333] text-[14px]">Fruits</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#333] text-[14px]">Vegetables</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#333] text-[14px]">Meat</span>
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#333] text-[14px]">Dairy</span>
          </label>
        </div>
      )}

      {selectedFilter === "By Price" && <PriceRangeSlider />}
    </div>
  );
};

export default Filter;
