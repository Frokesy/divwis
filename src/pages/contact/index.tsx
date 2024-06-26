import MainContainer from "../../components/wrappers/MainContainer";

const Contact = () => {
  return (
    <MainContainer active="contact">
      <div className="bg-[#f1f1f1] min-h-[80vh] pb-[10vh] lg:pt-10 pt-4">
        <div className="lg:w-[80vw] w-[95vw] mx-auto lg:pt-[6vh] pt-[10vh]">
          <h2 className="text-center lg:text-[34px] text-[26px] mb-10 font-semibold">
            Get In Touch
          </h2>
          <div className="lg:w-[55%] space-y-10 bg-[#fff] lg:p-10 p-6 rounded-xl mx-auto">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-1 w-[45%]">
                <label
                  htmlFor="firstname"
                  className="font-semibold text-[18px]"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="border border-[#ccc] rounded-lg outline-none px-3 lg:py-3 py-2 lg:w-[100%]"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col space-y-1 w-[45%]">
                <label htmlFor="lastname" className="font-semibold text-[18px]">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="border border-[#ccc] rounded-lg outline-none px-3 lg:py-3 py-2 lg:w-[100%]"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col space-y-1 w-[45%]">
                <label
                  htmlFor="firstname"
                  className="font-semibold text-[18px]"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-[#ccc] rounded-lg outline-none px-3 lg:py-3 py-2 lg:w-[100%]"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col space-y-1 w-[45%]">
                <label htmlFor="lastname" className="font-semibold text-[18px]">
                  Mobile Number:
                </label>
                <input
                  type="number"
                  id="phone"
                  className="border border-[#ccc] rounded-lg outline-none px-3 lg:py-3 py-2 lg:w-[100%]"
                  placeholder="Mobile Number"
                />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="" id="" />
                <span className="font-semibold lg:text-[18px]">
                  Delivery Problem
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="" id="" />
                <span className="font-semibold lg:text-[18px]">
                  Customer Service
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" name="" id="" />
                <span className="font-semibold lg:text-[18px]">Others</span>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <label htmlFor="message" className="font-semibold text-[18px]">
                Message
              </label>
              <textarea
                name=""
                id="message"
                className="border border-[#ccc] outline-none px-3 py-1 h-[180px] rounded-lg"
                placeholder="send us a message..."
              ></textarea>
            </div>

            <div className="mt-3 flex justify-end">
              <button className="bg-[#6eb356] hover:bg-[#fa961e] rounded-lg transition-colors duration-500 ease-in-out text-[#fff] py-3 px-6 font-semibold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Contact;
