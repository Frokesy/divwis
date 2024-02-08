const FeaturedProducts = () => {
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
      name: "Broyler Chicken",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-5.png",
    },
    {
      id: 6,
      name: "Orange Juice",
      price: "$150.00",
      review: "4.5",
      productImg: "/assets/products/pago.png",
    },
    {
      id: 7,
      name: "Grapes",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-4.png",
    },
    {
      id: 8,
      name: "Tomatoes",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-2.png",
    },
    {
      id: 0,
      name: "Tomatoes",
      price: "$50.00",
      review: "4.5",
      productImg: "/assets/products/p-sm-2.png",
    },
  ];

  return (
    <div className=" mt-6 pt-[15vh] mb-[20vh] bg-[#eef6eb]">
      <h2 className="font-bold text-[32px] text-center">
        Featured Brand Products
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor.
      </p>

      <div className="grid grid-cols-3 gap-x-[1vw] w-[80vw] mx-auto mt-10">
        <div className="w-[100%] space-y-4">
          {products.map(
            (product) =>
              product.id > 4 && (
                <div
                  key={product.id}
                  className="flex space-x-3 rounded-lg p-2 bg-[#fff]"
                >
                  <div className="bg-[#f1f1f1] w-[150px]">
                    <img
                      src={product.productImg}
                      alt="product"
                      className="w-[100%] h-[115px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-[100%]">
                    <div className="flex items-center space-x-2">
                      <div className="text-[#808080] text-[15px]">
                        Product Review: {product.review}/5
                      </div>
                    </div>
                    <h3 className="font-bold text-[18px] mt-2">
                      {product.name}
                    </h3>
                    <div className="flex space-x-3 text-[15px] mt-2">
                      <span className="text-[#808080] line-through">
                        $200.00
                      </span>
                      <span className="text-[#333]">{product.price}</span>
                    </div>
                    <p className="text-[14px] mt-2 text-[#19483a]">Shop Now</p>
                  </div>
                </div>
              )
          )}
        </div>

        <div>
          {products.map(
            (product) =>
              product.id === 0 && (
                <div
                  key={product.id}
                  className="bg-[#fff] flex flex-col pt-10 px-6"
                >
                  <p className="italic text-[#fa961e] font-semibold text-[13px]">
                    100% organic products
                  </p>
                  <h2 className="pt-2 font-bold text-[18px]">Fresh Fruits</h2>
                  <h1 className="font-bold text-[22px]">Healthy Juice</h1>
                  <span className="text-[#808080] text-[14px]">
                    Get 50% Off on Selected Organic Items
                  </span>
                  <div className="mt-3">
                    <button className="bg-[#fa961e] text-[#fff] py-3 px-6 font-semibold">
                      Shop Now
                    </button>
                  </div>
                  <img
                    src="/assets/products/pago.png"
                    alt="pago"
                    className="h-[360px] object-cover"
                  />
                </div>
              )
          )}
        </div>

        <div className="w-[100%] space-y-4">
          {products.map(
            (product) =>
              product.id < 4 && (
                <div
                  key={product.id}
                  className="flex space-x-3 rounded-lg p-2 bg-[#fff]"
                >
                  <div className="bg-[#f1f1f1] w-[150px]">
                    <img
                      src={product.productImg}
                      alt="product"
                      className="w-[100%] h-[115px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-[100%]">
                    <div className="flex items-center space-x-2">
                      <div className="text-[#808080] text-[15px]">
                        Product Review: {product.review}/5
                      </div>
                    </div>
                    <h3 className="font-bold text-[18px] mt-2">
                      {product.name}
                    </h3>
                    <div className="flex space-x-3 text-[15px] mt-2">
                      <span className="text-[#808080] line-through">
                        $200.00
                      </span>
                      <span className="text-[#333]">{product.price}</span>
                    </div>
                    <p className="text-[14px] mt-2 text-[#19483a]">Shop Now</p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <img src="/assets/bg-shape-2.png" alt="bg" className="pt-[15vh]" />
    </div>
  );
};

export default FeaturedProducts;
