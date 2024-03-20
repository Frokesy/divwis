const HeroSection = () => {
  return (
    <div className="h-[80vh] w-[95vw] mx-auto flex justify-between my-[10vh]">
      <div className="socials w-[3%]"></div>
      <div className="main w-[85%] relative flex justify-between items-center">
        <div className="flex flex-col w-[40%]">
          <p className="text-[#ff7c08] text-[16px] font-bold font-mono">
            Genuine 100% local Products
          </p>
          <h2 className="text-[56px] font-bold capitalize">
            online fresh <br /> local{" "}
            <span className="text-[#ff7c08]">products</span>
          </h2>
          <p className="text-[16px] text-[#808080]">
            Get your groceries in as fast and easy as you want it.
          </p>
          <div className="flex space-x-10 mt-10 lg:w-[70%]">
            <button className="bg-[#ff7c08] hover:bg-[#7ea405] transition-colors duration-500 ease-in-out w-[50%] text-[#fff] text-[18px] font-bold px-8 py-2">
              Shop Now
            </button>
            <button className="bg-[#7ea405] hover:bg-[#ff7c08] transition-colors duration-500 ease-in-out w-[50%] text-[#fff] text-[18px] font-bold px-8 py-2">
              Contact Us
            </button>
          </div>
        </div>

        <div className="img-container flex justify-between mt-[20vh] items-center w-[60%]">
          <div className="flex flex-col">
            <img
              src="/assets/orange-1.png"
              alt="orange"
            />
            <img
              src="/assets/orange-2.png"
              alt="orange"
            />
          </div>
          <img src="/assets/tree.png" alt="tree" />
          <img
            src="/assets/fruits.png"
            alt="fruits"
            className="w-[520px] h-[600px]"
          />
          <div className="absolute top-0 right-0">
            <img src="/assets/leaf-shadow.png" alt="leaf" className="" />
          </div>
        </div>
      </div>
      <div className="w-[3%]"></div>
      {/* <div className="bg-[url('/assets/hero_img.jpg')] z-0 lg:h-[80vh] h-[620px] bg-center bg-cover bg-no-repeat items-center justify-center">
        <div className="absolute bg-[#000] bg-opacity-65 text-[#fff] lg:h-[80%] h-[620px] w-[100%]">
          <div className="flex flex-col justify-center h-[100%] lg:w-[80vw] w-[95vw] mx-auto lg:font-mono">
            <h1 className="lg:text-[60px] text-[40px] font-bold">
              Looking to buy your
            </h1>
            <p className="lg:text-[50px] text-[40px] font-bold">
              local stuff at affordable cost?
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
