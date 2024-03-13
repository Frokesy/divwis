import FiveStars from "../svgs/stars/FiveStars";
import FourStars from "../svgs/stars/FourStars";
import OneStar from "../svgs/stars/OneStar";
import ThreeStars from "../svgs/stars/ThreeStars";
import TwoStars from "../svgs/stars/TwoStars";

const Rating = () => {
  return (
    <div>
      <h3 className="font-semibold text-[18px] pt-6">Rating</h3>

      <div className="pt-4">
        <div className="flex justify-between items-center">
          <FiveStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            45
          </span>
        </div>
        <div className="flex justify-between items-center">
          <FourStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            53
          </span>
        </div>
        <div className="flex justify-between items-center">
          <ThreeStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            38
          </span>
        </div>
        <div className="flex justify-between items-center">
          <TwoStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            12
          </span>
        </div>
        <div className="flex justify-between items-center">
          <OneStar />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            03
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
