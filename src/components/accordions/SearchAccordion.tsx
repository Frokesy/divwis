import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { getProducts } from "../data/products";
import { FC, useEffect, useState } from "react";

interface ProductsProps {
  id: string;
  name: string;
  default_price: string;
  priceId?: string;
  review?: string;
  image: string;
  category: string;
  desc: string;
}

interface SearchAccordionProp {
  handleProductClick: (product: ProductsProps) => void;
}

const SearchAccordion: FC<SearchAccordionProp> = ({ handleProductClick }) => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");


  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute -ml-[260px] bg-[#fff] top-14 shadow-xl"
      >
        <div className="flex items-center input-field rounded-lg">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full border-none bg-inherit px-3 text-[14px] outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="bg-[#ff7c08] p-4 rounded-r-lg">
            <FaSearch fill="#fff" />
          </div>
        </div>

        {searchTerm && (
          <div className="mt-2 min-h-60 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover mr-2"
                    />
                    <div>
                      <p className="text-[14px] font-medium">{product.name}</p>
                      <p className="text-[12px] text-gray-500">
                        ${product.default_price}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-2 text-[14px] text-gray-500">
                No products found.
              </p>
            )}
          </div>
        )}
      </motion.div>
    </>
  );
};

export default SearchAccordion;
