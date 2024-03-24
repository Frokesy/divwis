import { Cereals, Fruits, Meat, Milk, Vegetables } from "../svgs/Icons";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Cereals",
      icon: <Cereals />,
      borderColor: "#ff3b30",
      bgColor: "#f9e7e6",
    },
    {
      id: 2,
      name: "Fruits",
      icon: <Fruits />,
      borderColor: "#fa961e",
      bgColor: "#ede2d4",
    },
    {
      id: 3,
      name: "Vegetables",
      icon: <Vegetables />,
      borderColor: "#aed581",
      bgColor: "#e9f3dd",
    },
    {
      id: 4,
      name: "Meat",
      icon: <Meat />,
      borderColor: "#c1694f",
      bgColor: "#eeddd8",
    },
    {
      id: 5,
      name: "Milk & Dairy",
      icon: <Milk />,
      borderColor: "#67dde0",
      bgColor: "#d9f2f2",
    },
  ];
  return (
    <div className="pt-[15vh]">
      <div className="relative">
        <div className="absolute z-10 w-[100%] flex items-center justify-center lg:-top-6 -top-4">
          <h2 className="font-bold lg:text-[32px] text-[26px] bg-[#fff] px-3">
            Our top categories
          </h2>
        </div>
        <div className="lg:w-[80vw] w-[90vw] mx-auto flex lg:flex-row flex-col lg:space-y-0 space-y-10 justify-between py-10 px-20 relative border border-dashed z-0 bg-[#fff] border-[#ff973a] rounded-lg">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center cursor-pointer">
              <div
                style={{ borderColor: category.borderColor }}
                className="border border-dashed p-2 rounded-[100%] hover:scale-125 transition-transform duration-700 ease-in-out"
              >
                <div
                  style={{ background: category.bgColor }}
                  className="p-4 rounded-[100%]"
                >
                  {category.icon}
                </div>
              </div>
              <h3 className="font-bold text-[18px] mt-4">{category.name}</h3>
              <div className="flex items-center space-x-2">
                <div
                  style={{ background: category.borderColor }}
                  className="p-1 rounded-full"
                ></div>
                <span className="text-[#333]">25 items</span>
              </div>
            </div>
          ))}
        </div>
        <div className="pb-[10vh] absolute top-[10vh] -z-10 lg:block hidden">
          <img
            src="/assets/bg-shape.png"
            alt="bg-shape"
            className="h-[30vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
