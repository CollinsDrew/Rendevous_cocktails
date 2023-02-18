import React from "react";

function CocktailList({ cocktails }) {
  return (
    <div className="flex flex-wrap justify-center">
      {cocktails.map((cocktail) => (
        <div
          key={cocktail.id}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4"
        >
          <img
            className="w-full h-64 object-cover"
            src={cocktail.image}
            alt={cocktail.name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{cocktail.name}</div>
            <p className="text-gray-700 text-base">{cocktail.info}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {cocktail.glass}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CocktailList;
