import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

export default function SearchBar(){
  return (
    <div className="relative">
      <input
        aria-label="Search products"
        className="w-full border rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        placeholder="Search here"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <button className="p-2 rounded-full"><FiFilter /></button>
      </div>
    </div>
  );
}
