import React from "react";

function SearchBar({ searchQuery, setSearchQuery, searchCocktails }) {
  return (
    <div className="w-full max-w-lg mx-auto mb-8">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search for a cocktail..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && searchCocktails()}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={searchCocktails}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
