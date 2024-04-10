import PriceRangeSlider from "./PriceRangeSlider";

const Filter = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 pt-6">
        <h3 className="font-semibold text-[18px]">Filter</h3>
        <p>By Price</p>
      </div>

      <PriceRangeSlider />
    </div>
  );
};

export default Filter;
