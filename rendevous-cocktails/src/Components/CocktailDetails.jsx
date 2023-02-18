import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CocktailDetail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        setCocktail(data.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCocktail();
  }, [id]);

  if (!cocktail) {
    return <div>Loading...</div>;
  }

  const { strDrink, strInstructions, strDrinkThumb } = cocktail;
  const ingredients = [];

  // Collect all ingredients and their measures
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (!ingredient) {
      break;
    }
    ingredients.push(`${measure} ${ingredient}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-lg mx-auto mb-8">
        <div className="bg-[#1d1e22] text-teal-500 border-2 border-teal-700 rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <img
              className="w-64 h-64 object-cover mx-auto"
              src={strDrinkThumb}
              alt={strDrink}
            />
            <h2 className="text-3xl font-bold text-center my-4">{strDrink}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {strInstructions}
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          to="/"
          className="block text-center text-blue-500 hover:text-blue-700"
        >
          Back to Search
        </Link>
      </div>
    </div>
  );
}

export default CocktailDetail;
