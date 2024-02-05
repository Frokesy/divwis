import { Cereals } from "../svgs/Icons";

const Categories = () => {
  return (
    <div className="pt-[15vh]">
      <div className="relative">
        <div className="absolute w-[100%] flex items-center justify-center z-10 -top-6">
          <h2 className="font-bold text-[32px] bg-[#fff] px-3">
            Our top categories
          </h2>
        </div>
        <div className="w-[80vw] mx-auto flex py-10 px-20 relative border border-dashed z-0 border-[#ff973a] rounded-lg">
          <div className="flex flex-col items-center">
            <div className="border border-dashed border-[#ff3b30] p-2 rounded-[100%]">
              <div className="bg-[#f9e7e6] p-4 rounded-[100%]">
                <Cereals />
              </div>
            </div>
            <h3 className="font-bold text-[18px] mt-4">Cereals</h3>
            <div className="flex items-center space-x-2">
                <div className="bg-[#ff3b30] p-1 rounded-full"></div>
                <span className="text-[#333]">25 items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
