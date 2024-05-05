import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="lg:text-[100px] text-[80px] bg-red-600 text-[#fff] lg:p-10 p-6 rounded-full">
        <FaX />
      </div>
      <h2 className="text-center text-[#808080] font-semibold mt-10">
        Payment Unsuccessful, please try again or go back to the{" "}
        <NavLink to="/" className="text-blue-500">homepage</NavLink>
      </h2>
    </div>
  );
};

export default Cancel;
