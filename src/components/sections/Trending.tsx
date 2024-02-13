const Trending = () => {
    const products = [
        { id: 1, name: "Strawberry Fruit", price: "$100.00", review: "4.5", productImg: "/assets/products/p-sm-1.png"},
        { id: 2, name: "Green Apple", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-2.png"},
        { id: 3, name: "Red Apple", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-3.png"},
        { id: 4, name: "Banana", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-4.png"}
    ]

  return (
    <div className=" mt-6 pt-[5vh] pb-[10vh]">
      <div className="flex lg:flex-row flex-col justify-between items-center w-[80vw] mx-auto">
        <h2 className="text-[26px] font-semibold">Top Trending Products</h2>

        <div className="lg:flex lg:space-x-6 grid grid-cols-3 place-items-center font-semibold text-[#404040] lg:text-[16px] text-[14px]">
          <span className="text-[#fa961e]">All Products</span>
          <span>Sea Food</span>
          <span>Vegetables</span>
          <span className="lg:hidden"></span>
          <span>Beans & Peas</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-1 lg:w-[80vw] w-[90vw] mx-auto gap-[2vw] mt-10">
        {products.map((product) => (
            <div key={product.id} className="flex flex-col w-[100%] border border-[#ccc] items-center mt-10">
                <div className="relative w-[100%]">
                <img
                    src={product.productImg}
                    alt="product"
                    className="w- h-[200px] object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#ff973a] text-[#fff] px-2 py-1">
                    {product.review} ★
                </div>
                </div>
                <h3 className="font-bold text-[18px] mt-4">{product.name}</h3>
                <span className="text-[#333]">{product.price}</span>
                <p className="text-[14px] mt-3 text-[#19483a]">Shop Now</p>
            </div>
        ))}
      </div>
    </div>
  );
};
export default Trending
