import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ingredients = [
  {
    name: "whisky",
    image: "https://via.placeholder.com/150x150.png?text=Whisky",
  },
  {
    name: "tequila",
    image: "https://via.placeholder.com/150x150.png?text=Tequila",
  },
  {
    name: "vodka",
    image: "https://via.placeholder.com/150x150.png?text=Vodka",
  },
  { name: "rum", image: "https://via.placeholder.com/150x150.png?text=Rum" },
  { name: "gin", image: "https://via.placeholder.com/150x150.png?text=Gin" },
];

function IngredientCard({ name, image }) {
  return (
    <Link
      to={`/cocktails/${name}`}
      className="w-64 m-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <img src={image} alt={name} className="w-full min-h-48 object-cover" />
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">Click to see cocktails with {name}</p>
      </div>
    </Link>
  );
}

function CocktailsByIngredient() {
  const [cocktails, setCocktails] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCocktails = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
    };
    fetchCocktails();
  }, [name]);

  return (
    <div>
      <h1>Cocktails with {name}</h1>
      {cocktails.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
      ))}
    </div>
  );
}

function IngredientList(props) {
  console.log(props);
  return (
    <div className="flex flex-wrap justify-center">
      {ingredients.map((ingredient) => (
        <IngredientCard
          key={ingredient.name}
          name={ingredient.name}
          image={ingredient.image}
          //   onClick={() => searchCocktailsAgain("something")}
        />
      ))}
    </div>
  );
}

export default IngredientList;
