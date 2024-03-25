const HeroSection = () => {
  return (
    <div className="h-[80vh] lg:w-[95vw] w-[90vw] mx-auto flex lg:flex-row flex-col lg:justify-between lg:my-[10vh] lg:mt-0 mt-[13vh]">
      <div className="socials lg:w-[3%] lg:block hidden"></div>
      <div className="main lg:w-[85%] relative flex lg:flex-row flex-col justify-between items-center">
        <div className="flex flex-col lg:w-[40%] w-[100%]">
          <p className="text-[#ff7c08] z-10 text-[16px] font-bold font-mono">
            Genuine 100% local Products
          </p>
          <h2 className="lg:text-[56px] text-[34px] font-bold capitalize">
            online fresh <br /> local{" "}
            <span className="text-[#ff7c08]">products</span>
          </h2>
          <p className="text-[16px] text-[#808080]">
            Get your groceries in as fast and easy as you want it.
          </p>
          <div className="flex space-x-10 lg:mt-10 mt-4 lg:w-[70%]">
            <button className="bg-[#ff7c08] hover:bg-[#7ea405] transition-colors duration-500 ease-in-out w-[50%] text-[#fff] text-[18px] font-bold px-8 py-2">
              Shop Now
            </button>
            <button className="bg-[#7ea405] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out w-[50%] text-[#fff] text-[18px] font-bold px-8 py-2">
              Contact Us
            </button>
          </div>
        </div>

        <div className="img-container flex justify-between lg:mt-[20vh] mt-10 items-center lg:w-[60%]">
          <div className="lg:flex flex-col accent-indigo-100 hidden">
            <img
              src="/assets/orange-1.png"
              alt="orange"
            />
            <img
              src="/assets/orange-2.png"
              alt="orange"
            />
          </div>
          <img src="/assets/tree.png" alt="tree" className="lg:block hidden" />
          <img
            src="/assets/fruits.png"
            alt="fruits"
            className="lg:w-[520px] lg:h-[600px] w-[340px] h-[350px]"
          />
        </div>
      </div>
      <div className="lg:w-[3%] lg:block hidden"></div>
    </div>
  );
};

export default HeroSection;
