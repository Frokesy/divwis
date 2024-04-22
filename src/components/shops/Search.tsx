import { FC, useState } from "react";
import { FaSearch } from "react-icons/fa";
interface SearchFilterProps {
  filterBySearch: (searchInput: string) => void;
}

const Search:FC<SearchFilterProps> = ({ filterBySearch }) => {
  const [searchInput, setSearchInput] = useState("");



  return (
    <div>
      <h2 className="text-[#333] text-[18px] font-semibold">Search Now</h2>

      <div className="flex items-center input-field mt-3 border border-[#f1f1f1] rounded-lg">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for products"
          className="w-full border-none bg-inherit px-3 text-[14px] outline-none"
        />
        <div
          onClick={() => filterBySearch(searchInput)}
          className="bg-[#ff7c08] p-4 rounded-r-lg cursor-pointer"
        >
          <FaSearch fill="#fff" />
        </div>
      </div>
    </div>
  );
};

export default Search;
