import { products } from "../data/products";

const OrderCard = () => {
  return (
    <div className="">
      {products.slice(0, 2).map((product) => (
        <div
          key={product.id}
          className="border border-[#ccc] items-center p-6 mt-4 flex justify-between rounded-lg"
        >
          <div>
            <button className="text-[10px] bg-[#6eb356] text-[#fff] font-bold px-2 py-1 mr-4 uppercase">
              delivered
            </button>
            <button className="text-[10px] bg-[#ff0406] text-[#fff] font-bold px-2 py-1 mr-4 uppercase">
              non-returnable
            </button>
            <p className="text-[13px] font-semibold text-[#333] mt-2 mb-4">
              on 05/12/2022
            </p>
            <div className="flex items-center space-x-6">
              <img
                src={product.productImg}
                alt="product"
                className="w-[104px] h-[104px] object-cover"
              />
              <div className="">
                <h2 className="text-[20px]">{product.name}</h2>
                <p className="text-[#808080] text-[14px] my-2">QTY: 1</p>
                <p className="text-[15px] font-semibold">{product.price}</p>
              </div>
            </div>
          </div>
          <div className="">
            <button className="bg-[#6eb356] hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-4 px-10 uppercase font-semibold rounded-lg">
              Buy Again
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
