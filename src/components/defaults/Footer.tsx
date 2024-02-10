// import {
//   Headphone,
//   InstagramIcon,
//   LinkedInIcon,
//   LocationIcon,
//   SupportIcon,
//   TwitterIcon,
//   YoutubeIcon,
// } from "../icons";

import {
  Headphone,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  SupportIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../svgs/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#191d28] text-[#fff] py-[10vh]">
      <div className="flex flex-col font-bold text-[24px] justify-center items-center">
        <span>
          Subscribe to Divwis Blog,{" "}
          <span className="text-[#fa961e]">New Arrivals</span>
        </span>
        <span>& Other Information</span>
      </div>
      <div className="flex justify-center items-center mt-6">
        <input
          type="text"
          placeholder="Enter Email Address"
          className="p-3 min-w-[400px] text-[#333] outline-none border-none rounded-l-lg"
        />
        <button className="bg-[#19483a] px-10 py-3 font-semibold rounded-r-lg">
          Subscribe Now
        </button>
      </div>

      <div className="border-b border-[#404040] my-10 w-[80vw] mx-auto"></div>
      <div className="w-[80vw] mx-auto grid grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-[34px] font-semibold">Divwis</h2>
          <p className="text-[14px]">
            © {currentYear} Divwis Limited. All rights reserved
          </p>
          <div className="flex items-center space-x-[16px]">
            <InstagramIcon />
            <TwitterIcon />
            <YoutubeIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div className="flex">
          <div className="space-y-3 w-[50%]">
            <h2 className="text-[20px] font-bold">Quick Links</h2>
            <ul className="space-y-3 text-[15px]">
              <li>
                <span>About</span>
              </li>
              <li>
                <span>FAQs</span>
              </li>
              <li>
                <span>Terms of Service</span>
              </li>
              <li>
                <span>Privacy Policy</span>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-[20px] font-bold">Contact</h2>
            <ul className="space-y-3 text-[15px]">
              <li className="flex items-center space-x-3">
                <SupportIcon />
                <p>support@divwisglobals.com</p>
              </li>
              <li className="flex items-center space-x-3">
                <Headphone />
                <p>+234-809-790-8574</p>
              </li>
              <li className="flex items-center space-x-3 pb-10">
                <LocationIcon />
                <p>
                    Somewhere Street, Some Town, One city
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
