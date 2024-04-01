import FiveStars from "../svgs/stars/FiveStars";

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
    {
        id: 5,
        name: "Strawberry Fruit",
        price: "$100.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-1.png",
      },
      {
        id: 6,
        name: "Green Apple",
        price: "$50.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-2.png",
      },
      {
        id: 7,
        name: "Red Apple",
        price: "$50.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-3.png",
      },
      {
        id: 8,
        name: "Banana",
        price: "$50.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-4.png",
      },
      {
        id: 9,
        name: "Strawberry Fruit",
        price: "$100.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-1.png",
      },
      {
        id: 10,
        name: "Green Apple",
        price: "$50.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-2.png",
      },
      {
        id: 11,
        name: "Red Apple",
        price: "$50.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-3.png",
      },
      {
        id: 12,
        name: "Banana",
        price: "$50.00",
        review: "4.5",
        productImg: "/assets/products/p-sm-4.png",
      },
  ];
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[100%] mt-10 lg:mt-0 mx-auto lg:gap-[1vw] gap-[3vh]">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col w-[100%] bg-[#fff] rounded-lg"
          >
            <div className="relative w-[100%] flex flex-col items-center">
              <div className="absolute top-0 left-0">
                <h2 className="bg-[#ff0406] rounded-tl-lg text-[#fff] text-[14px] font-semibold pl-3 pr-6 py-1 uppercase">
                  -12% off
                </h2>
              </div>
              <img
                src={product.productImg}
                alt="product"
                className="mt-10 lg:h-[200px] lg:w-[250px] w-[350px] h-[270px]"
              />
            </div>
            <div className="px-6">
              <h3 className="font-bold text-[18px] mt-4">{product.name}</h3>
              <div className="flex items-center space-x-2 mb-2">
                <FiveStars size="sm" />
                <span className="text-[12px] mt-1 text-[#808080]">
                  (5.2k reviews)
                </span>
              </div>
              <span className="pt-2 text-[#ff0406] font-bold text-[18px]">
                {product.price}
              </span>
              <div className="border border-[#ff7c08] text-[#ff7c08] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out hover:text-[#fff] cursor-pointer my-6 py-3 rounded-lg flex items-center justify-center">
                <p className="text-[18px] font-bold">Shop Now</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
