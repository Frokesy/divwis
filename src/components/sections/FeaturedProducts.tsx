const FeaturedProducts = () => {

    const products = [
        { id: 1, name: "Strawberry Fruit", price: "$100.00", review: "4.5", productImg: "/assets/products/p-sm-1.png"},
        { id: 2, name: "Green Apple", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-2.png"},
        { id: 3, name: "Red Apple", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-3.png"},
        { id: 4, name: "Banana", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-4.png"},
        { id: 5, name: "Orange", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-5.png"},
        { id: 6, name: "Pineapple", price: "$150.00", review: "4.5", productImg: "/assets/products/pago.png"},
        { id: 7, name: "Mango", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-4.png"},
        { id: 8, name: "Grapes", price: "$50.00", review: "4.5", productImg: "/assets/products/p-sm-2.png"},
    ]

  return (
    <div className=" mt-6 pt-[15vh] mb-[20vh] bg-[#eef6eb]">
      <h2 className="font-bold text-[32px] text-center">
        Featured Brand Products
      </h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor.
      </p>

      <div className="grid grid-cols-4 w-[80vw] mx-auto gap-[5vw] mt-10">
        {products.map((product) => (
            <div key={product.id} className="flex flex-col w-[100%] items-center mt-10">
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

      <img src="/assets/bg-shape-2.png" alt="bg" className="pt-[15vh]" />
    </div>
  );
};

export default FeaturedProducts;
