import { FC } from "react";
import FiveStars from "../svgs/stars/FiveStars";
import FourStars from "../svgs/stars/FourStars";
import OneStar from "../svgs/stars/OneStar";
import ThreeStars from "../svgs/stars/ThreeStars";
import TwoStars from "../svgs/stars/TwoStars";

interface RatingProps {
  filterProductsByRating: (n: number) => void;
}

const Rating: FC<RatingProps> = ({ filterProductsByRating }) => {
  return (
    <div>
      <h3 className="font-semibold text-[18px] pt-6">Rating</h3>

      <div className="pt-4">
        <div
          onClick={() => filterProductsByRating(5)}
          className="flex justify-between items-center cursor-pointer"
        >
          <FiveStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            45
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(4)}
          className="flex justify-between items-center cursor-pointer"
        >
          <FourStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            53
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(3)}
          className="flex justify-between items-center cursor-pointer"
        >
          <ThreeStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            38
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(2)}
          className="flex justify-between items-center cursor-pointer"
        >
          <TwoStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            12
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(1)}
          className="flex justify-between items-center cursor-pointer"
        >
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
