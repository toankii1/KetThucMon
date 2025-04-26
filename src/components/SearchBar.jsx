import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-gray-300 rounded overflow-hidden bg-white">
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="px-4 py-2 w-60 focus:outline-none"
      />
      <button className="px-3 text-gray-600 hover:text-blue-600">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
