import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CocktailsByIngredient() {
  const [cocktails, setCocktails] = useState([]);
  const { ingredient } = useParams();

  useEffect(() => {
    async function fetchCocktails() {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
    }
    fetchCocktails();
  }, [ingredient]);

  return (
    <div>
      <h1>Cocktails with {ingredient}</h1>
      {cocktails.map((cocktail) => (
        <Link to={`/cocktails/${cocktail.idDrink}`} key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
        </Link>
      ))}
    </div>
  );
}

export default CocktailsByIngredient;
