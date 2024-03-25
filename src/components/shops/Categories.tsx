
const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Cereals",
      quantity: 20,
    },
    {
      id: 2,
      name: "Fruits",
      quantity: 30,
    },
    {
      id: 3,
      name: "Vegetables",
      quantity: 40,
    },
    {
      id: 4,
      name: "Meat",
      quantity: 8,
    },
    {
      id: 5,
      name: "Milk & Dairy",
      quantity: 15,
    },
  ];

  return (
    <div>
      <h2 className="text-[#333] text-[18px] font-semibold pt-6">Categories</h2>

      <div className="mt-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center justify-between py-2"
          >
            <h2 className="text-[#333] text-[14px]">{category.name}</h2>
            <span className="text-[#333] text-[12px] bg-[#f1f1f1] py-1 px-2 rounded-lg">
              {category.quantity < 10
                ? `0${category.quantity}`
                : category.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
