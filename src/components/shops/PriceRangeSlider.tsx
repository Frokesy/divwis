import { useState } from "react";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value > maxPrice) {
      value = maxPrice;
    }
    setMinPrice(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (value < minPrice) {
      value = minPrice;
    }
    setMaxPrice(value);
  };

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
      <div className="slider-container w-[100%] h-[6px] relative bg-[#e4e4e4] rounded-[5px]">
        <div className="price-slider h-[100%] left-[25%] right-[15%] absolute rounded-[5px] bg-[#01940b]"></div>
      </div>
      <div className="range-input relative">
        <input
          type="range"
          className="min-range absolute w-[100%] h-[5px] bg-none top-[-5px] pointer-events-none cursor-pointer"
          min="0"
          max="10000"
          value={minPrice}
          onChange={handleMinChange}
          step="1"
        />
        <input
          type="range"
          className="absolute w-[100%] h-[5px] bg-none top-[-5px] pointer-events-none cursor-pointer"
          min="0"
          max="10000"
          value={maxPrice}
          onChange={handleMaxChange}
          step="1"
        />
      </div>

      
      {/* <div className="w-[100%]">
        <input
          type="range"
          min="0"
          max="100"
          className="h-[5px] w-[50%]"
          style={{ backgroundColor: "#FFA500" }}
        />
        <input
          type="range"
          min="0"
          max="100"
          className="h-[5px] w-[50%]"
          style={{ backgroundColor: "#FFA500" }}
        />
      </div> */}
      <div className="w-[100%]">
        <input
          type="number"
          min="0"
          max="100"
          value={minPrice}
          onChange={handleMinInputChange}
          className="w-[50%] outline-none border border-gray-300 px-2 py-1 rounded-l-md"
        />
        <input
          type="number"
          min="0"
          max="100"
          value={maxPrice}
          onChange={handleMaxInputChange}
          className="w-[50%] outline-none border border-gray-300 px-2 py-1 rounded-r-md"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
