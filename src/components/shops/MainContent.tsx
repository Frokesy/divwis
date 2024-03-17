const MainContent = () => {
  const products = [
    {
      id: 1,
      name: "Strawberry Fruit",
      price: "$100.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-1.png",
    },
    {
      id: 2,
      name: "Green Apple",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-2.png",
    },
    {
      id: 3,
      name: "Red Apple",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-3.png",
    },
    {
      id: 4,
      name: "Banana",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-4.png",
    },
  ];
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[100%] w-[90vw] mx-auto gap-[2vw]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col w-[100%] border border-[#ccc] items-center mt-10"
          >
            <div className="relative w-[100%]">
              <img
                src={product.productImg}
                alt="product"
                className="object-cover lg:w-auto lg:h-[200px] w-[350px] h-[270px]"
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

export default MainContent;
