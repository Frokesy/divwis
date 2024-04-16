import { FC } from "react";
import FiveStars from "../svgs/stars/FiveStars";
import FourStars from "../svgs/stars/FourStars";
import OneStar from "../svgs/stars/OneStar";
import ThreeStars from "../svgs/stars/ThreeStars";
import TwoStars from "../svgs/stars/TwoStars";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  review: string;
  productImg: string;
}

interface RatingProps {
  productsPerRating: ProductsProps[];
  filterProductsByRating: (n: number) => void;
}

const Rating: FC<RatingProps> = ({
  productsPerRating,
  filterProductsByRating,
}) => {

  console.log(productsPerRating)
  return (
    <div>
      <h3 className="font-semibold text-[18px] pt-6">Rating</h3>

      <div className="pt-4">
        <div
          onClick={() => filterProductsByRating(5)}
          className="flex justify-between items-center"
        >
          <FiveStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            45
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(4)}
          className="flex justify-between items-center"
        >
          <FourStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            53
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(3)}
          className="flex justify-between items-center"
        >
          <ThreeStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            38
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(2)}
          className="flex justify-between items-center"
        >
          <TwoStars />
          <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
            12
          </span>
        </div>
        <div
          onClick={() => filterProductsByRating(1)}
          className="flex justify-between items-center"
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
