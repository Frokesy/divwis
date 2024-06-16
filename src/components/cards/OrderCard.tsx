import { products } from "../data/products";

const OrderCard = () => {
  return (
    <div className="">
      {products.slice(0, 2).map((product) => (
        <div
          key={product.id}
          className="border border-[#ccc] items-center lg:p-6 p-4 mt-4 flex justify-between rounded-lg"
        >
          <div>
            <div className="flex w-[50vw]">
              <button className="lg:text-[10px] text-[9px] bg-[#6eb356] text-[#fff] font-bold px-2 py-1 mr-4 uppercase">
                delivered
              </button>
              <button className="lg:text-[10px] text-[9px] bg-[#ff0406] text-[#fff] font-bold px-2 py-1 mr-4 uppercase">
                non-returnable
              </button>
            </div>
            <p className="text-[13px] font-semibold text-[#333] mt-2 mb-4">
              on 05/12/2022
            </p>
            <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:w-[100%] w-[77vw]">
              <div className="flex items-center space-x-6">
                <img
                  src={product.image}
                  alt="product"
                  className="w-[104px] h-[104px] object-cover"
                />
                <div className="">
                  <h2 className="lg:text-[20px]">{product.name}</h2>
                  <p className="text-[#808080] lg:text-[14px] text-[12px] my-2">QTY: 1</p>
                  <p className="lg:text-[15px] text-[13px] font-semibold">{product.default_price}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#6eb356] hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] lg:py-4 py-1 lg:px-10 px-4 uppercase font-semibold rounded-lg">
                  Buy Again
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
