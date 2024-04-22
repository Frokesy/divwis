import { FC, useState } from "react";

interface PriceFilterProps {
  filterProductsByPrice: (min: number, max: number) => void;
}

const Filter: FC<PriceFilterProps> = ({ filterProductsByPrice }) => {
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
    <div>
      <div className="flex justify-between items-center mb-2 pt-6">
        <h3 className="font-semibold text-[16px]">Filter By Price</h3>
      </div>

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
          <button
            onClick={() => filterProductsByPrice(minPrice, maxPrice)}
            className="py-0.5 px-3 bg-[#ff7c08] text-[#fff] font-semibold rounded-lg"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
