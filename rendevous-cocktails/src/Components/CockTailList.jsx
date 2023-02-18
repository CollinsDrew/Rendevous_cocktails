import React from "react";
import { Link } from "react-router-dom";

function CocktailList({
  cocktails,
  searchQuery,
  setSearchQuery,
  searchCocktails,
}) {
  return (
    <div>
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
      <div className="flex flex-wrap -mx-2">
        {cocktails.map((cocktail) => (
          <div
            key={cocktail.idDrink}
            className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4"
          >
            <Link to={`/cocktail/${cocktail.idDrink}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.strDrink}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    {cocktail.strDrink}
                  </h2>
                  <p className="text-gray-600">{cocktail.strCategory}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CocktailList;
