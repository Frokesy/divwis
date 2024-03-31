import React, { FC, useState } from "react";
import ModalContainer from "../wrappers/ModalContainer";
import FiveStars from "../svgs/stars/FiveStars";
import { FaCheckCircle } from "react-icons/fa";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
  review: string;
  productImg: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductsProps | undefined;
}

const ViewProductModal: FC<ModalProps> = ({ isOpen, setIsOpen, product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const descs = [
    "Natural ingredients",
    "Tastes better with milk",
    "Vitamins B2, B3 and B6",
    "Refrigerate for freshness",
  ];

  const handleClick = (cmd: string) => {
    cmd === "increment" ? setQuantity(quantity + 1) : setQuantity(quantity - 1);
  };

  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      {product && (
        <div className="flex justify-between items-center space-x-10 w-[60vw]">
          <div className="w-[450px]">
            <img
              src={product.productImg}
              className="w-[100%] h-[300px]"
              alt="productImg"
            />
          </div>
          <div className="flex flex-col w-[50%]">
            <h3 className="font-bold text-[24px] mt-2">{product.name}</h3>
            <div className="flex items-center space-x-2">
              <div className="text-[#808080] flex items-center space-x-2 lg:mt-0 lg:text-[15px] mt-2 text-[13px]">
                <FiveStars />
                <p>{product.review}/5 (4.2k reviews)</p>
              </div>
            </div>
            <div className="flex space-x-3 text-[15px]">
              <span className="text-[#808080] line-through">$200.00</span>
              <span className="text-[#ff3b30] font-semibold">
                {product.price}
              </span>
            </div>
            <h2 className="font-bold text-[18px] mt-6">Description</h2>
            <p className="text-[#808080] pt-1">
              Clicks-and-mortar "outside the bethinking. Interactively
              disseminate innovative intellectual relationships
            </p>
            <div className="mt-2 space-y-3">
              {descs.map((desc, index) => (
                <div
                  key={index}
                  className="flex items-center text-[#808080] text-[14px] space-x-3"
                >
                  <FaCheckCircle fill="#6eb356" size={20} />
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-[18px] font-semibold mb-2">Quantity:</h2>
              <div className="flex">
                <p
                  onClick={() => handleClick("decrement")}
                  className="border border-[#ccc] px-3 cursor-pointer text-[20px] text-[#333] font-bold"
                >
                  -
                </p>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-[40px] border border-[#ccc] px-2 outline-none rounded-md"
                />
                <p
                  onClick={() => handleClick("increment")}
                  className="border border-[#ccc] px-3 cursor-pointer text-[20px] text-[#333] font-bold"
                >
                  +
                </p>
              </div>
            </div>

            <div className="flex items-center mt-3">
              <button className="bg-[#ff7c08] text-[#fff] py-2 px-4 rounded-md">
                Add to Cart
              </button>
              <button className="bg-[#fff] text-[#ff7c08] py-2 px-4 rounded-md ml-3">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  );
};

export default ViewProductModal;
