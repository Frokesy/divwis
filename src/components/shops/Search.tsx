import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div>
      <h2 className="text-[#333] text-[18px] font-semibold">Search Now</h2>

      <div className="flex items-center input-field mt-3 border border-[#f1f1f1] rounded-lg">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full border-none bg-inherit px-3 text-[14px] outline-none"
        />
        <div className="bg-[#ff7c08] p-4 rounded-r-lg">
          <FaSearch fill="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Search;
