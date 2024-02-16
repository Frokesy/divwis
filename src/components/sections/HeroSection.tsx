const HeroSection = () => {
  return (
    <div className="bg-[url('/assets/hero_img.jpg')] z-0 lg:h-[80vh] h-[620px] bg-center bg-cover bg-no-repeat items-center justify-center">
      <div className="absolute bg-[#000] bg-opacity-65 text-[#fff] lg:h-[80%] h-[620px] w-[100%]">
        <div className="flex flex-col justify-center h-[100%] lg:w-[80vw] w-[95vw] mx-auto lg:font-mono">
          <h1 className="lg:text-[60px] text-[40px] font-bold">Looking to buy your</h1>
          <p className="lg:text-[50px] text-[40px] font-bold">
            local stuff at affordable cost?
          </p>
          <p className="text-[18px] pt-4">
            Get your groceries in as fast and easy as you want it.
          </p>
          <div className="flex lg:w-[40%] space-x-10 mt-10">
            <button className="bg-[#19483a] w-[50%] text-[#fff] text-[18px] font-bold px-8 py-2">
              Shop Now
            </button>
            <button className="bg-[#eef6eb] w-[50%] text-[#19483a] text-[18px] font-bold px-8 py-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
