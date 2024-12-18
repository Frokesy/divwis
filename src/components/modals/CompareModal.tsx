import { FC, useState } from "react";
import ModalContainer from "../wrappers/ModalContainer";
import { FaArrowsLeftRight, FaArrowsUpDown } from "react-icons/fa6";
import ProductDisplay from "../defaults/ProductDisplay";

export interface ProductsProps {
  id: string;
  name: string;
  default_price: string;
  priceId?: string;
  review?: string;
  image: string;
  category: string;
  desc?: string;
  featured?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductsProps | undefined;
  allProducts: ProductsProps[] | undefined;
}

const CompareModal: FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  product,
  allProducts,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<
    ProductsProps | undefined
  >(undefined);
  const [filter, setFilter] = useState("");

  const handleProductSelect = (product: ProductsProps) => {
    setSelectedProduct(product);
  };

  const filteredProducts = allProducts?.filter(
    (p) =>
      p.name.toLowerCase().includes(filter.toLowerCase()) ||
      p.category.toLowerCase().includes(filter.toLowerCase())
  );

  const descs = [
    "Natural ingredients",
    "Tastes better with milk",
    "Vitamins B2, B3 and B6",
    "Refrigerate for freshness",
  ];

  return (
    <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="lg:w-[70vw] w-[85vw] flex lg:flex-row flex-col justify-between items-center lg:space-x-10 space-y-6 lg:space-y-0">
        <div className="lg:w-[45%]">
          {product && <ProductDisplay product={product} descs={descs} />}
        </div>

        <div className="lg:block hidden">
          <FaArrowsLeftRight size={40} fill="#808080" />
        </div>

        <div className="lg:hidden block">
          <FaArrowsUpDown size={40} fill="#808080" />
        </div>

        <div className="lg:w-[45%]">
          {selectedProduct ? (
            <div className="">
              <ProductDisplay product={selectedProduct} descs={descs} />
            </div>
          ) : (
            <div className="w-full">
              <h3 className="text-[18px] font-bold mb-4">
                Select Product to Compare
              </h3>

              <input
                type="text"
                placeholder="Search by name or category"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full p-2 mb-4 border rounded-lg"
              />
              <div className="max-h-[300px] overflow-y-auto border rounded-lg p-2">
                {filteredProducts?.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleProductSelect(product)}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[50px] h-[50px]"
                      />
                      <p className="text-[16px] font-semibold">
                        {product.name}
                      </p>
                    </div>
                    <span className="text-[#ff3b30] font-semibold">
                      {product.default_price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </ModalContainer>
  );
};

export default CompareModal;
