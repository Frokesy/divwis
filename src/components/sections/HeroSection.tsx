const HeroSection = () => {
  return (
    <div className="bg-[url('/assets/hero_img.jpg')] h-[80vh] bg-center bg-cover bg-no-repeat items-center justify-center">
      <div className="absolute bg-[#000] bg-opacity-65 text-[#fff] h-[80%] w-[100%]">
        <div className="flex flex-col w-[70vw] mx-auto font-mono">
          <h1 className="text-[60px] font-bold pt-20">Looking to buy your</h1>
          <p className="text-[50px] font-bold">
            local stuff at affordable cost?
          </p>
          <p className="text-[18px] pt-4">
            Get your groceries in as fast and easy as you want it.
          </p>
          <div className="flex w-[50%] space-x-10 mt-10">
            <button className="bg-[#19483a] w-[50%] text-[#fff] text-[18px] font-bold px-8 py-2">
              Shop Now
            </button>
            <button className="bg-[#fff] w-[50%] text-[#19483a] text-[18px] font-bold px-8 py-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
