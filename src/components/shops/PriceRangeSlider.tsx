import { useState } from "react";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value > maxPrice) {
      value = maxPrice;
    }
    setMinPrice(value);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value < minPrice) {
      value = minPrice;
    }
    setMaxPrice(value);
  };

  return (
    <div className="flex flex-col">
      <div className="w-[100%] flex justify-between space-x-4 items-center">
        <input
          type="number"
          min="0"
          max="100"
          value={minPrice}
          onChange={handleMinInputChange}
          className="w-[50%] outline-none border border-gray-300 px-2 py-1 rounded-l-md"
        />
        <h2>-</h2>
        <input
          type="number"
          min="0"
          max="100"
          value={maxPrice}
          onChange={handleMaxInputChange}
          className="w-[50%] outline-none border border-gray-300 px-2 py-1 rounded-r-md"
        />
      </div>
      <div className="flex justify-end mt-2">
        <button className="py-0.5 px-3 bg-[#ff7c08] text-[#fff] font-semibold rounded-lg">
          Filter
        </button>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
