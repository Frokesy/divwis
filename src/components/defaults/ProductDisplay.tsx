import { FC } from "react";
import { ProductsProps } from "../modals/CompareModal";
import FiveStars from "../svgs/stars/FiveStars";
import { FaCheckCircle } from "react-icons/fa";

interface ProductDisplayProps {
    product: ProductsProps;
    descs: string[];
  }
  
  const ProductDisplay: FC<ProductDisplayProps> = ({ product, descs }) => (
    <div className="flex space-x-4 lg:w-[45%] border border-[#ccc] px-6 py-10 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-[100px]">
        <img src={product.image} className="w-[100%] h-[70px]" alt="productImg" />
      </div>
      <div className="flex flex-col w-[80%]">
        <h3 className="font-bold text-[24px] mt-2">{product.name}</h3>
        <div className="flex items-center space-x-2">
          <div className="text-[#808080] flex items-center space-x-2 lg:mt-0 lg:text-[15px] mt-2 text-[13px]">
            <FiveStars />
            <p>{product.review}/5 (4.2k reviews)</p>
          </div>
        </div>
        <div className="flex space-x-3 text-[15px]">
          <span className="text-[#808080] line-through">$200.00</span>
          <span className="text-[#ff3b30] font-semibold">{product.default_price}</span>
        </div>
        <h2 className="font-bold text-[18px] mt-6">Description</h2>
        <p className="text-[#808080] pt-1">
          Clicks-and-mortar "outside the bethinking. Interactively disseminate innovative intellectual relationships.
        </p>
        <div className="mt-2 space-y-3">
          {descs.map((desc, index) => (
            <div key={index} className="flex items-center text-[#808080] text-[14px] space-x-3">
              <FaCheckCircle fill="#6eb356" size={20} />
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  export default ProductDisplay;