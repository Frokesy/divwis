import { useEffect, useState } from "react";
import MainContainer from "../../components/wrappers/MainContainer";
import { motion } from "framer-motion";
import { getProducts } from "../../components/data/products";
import { FaSearch } from "react-icons/fa";
import ViewProductModal from "../../components/modals/ViewProductModal";

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

const Search = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [selectedProduct, setSelectedProduct] = useState<
    ProductsProps | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  const handleProductClick = (product: ProductsProps) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  return (
    <MainContainer active="search">
      <div className="bg-[#f1f1f1] pb-[10vh] min-h-[90vh] lg:pt-10 pt-4">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:w-[40vw] w-[95vw] mx-auto lg:mt-[6vh] min-h-[70vh] bg-[#fff] rounded-lg mt-[10vh] py-[5vh] px-4"
        >
          <div className="flex items-center input-field border border-[#ccc] rounded-lg">
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
                        <p className="text-[14px] font-medium">
                          {product.name}
                        </p>
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
      </div>

      {isModalOpen && (
        <ViewProductModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          product={selectedProduct}
        />
      )}
    </MainContainer>
  );
};

export default Search;
