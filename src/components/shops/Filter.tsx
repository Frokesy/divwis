import PriceRangeSlider from "./PriceRangeSlider";

const Filter = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2 pt-6">
        <h3 className="font-semibold text-[16px]">Filter By Price</h3>
      </div>
      <PriceRangeSlider />
    </div>
  );
};

export default Filter;
