import React, { useState } from "react";
import axios from "axios";
import CocktailList from "./Components/CockTailList";
import SearchBar from "./Components/SearchBar";
import "./App.css";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchCocktails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = response.data.drinks;
      if (data) {
        const newCocktails = data.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold text-center mb-8">Cocktail Search</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchCocktails={searchCocktails}
        />
      </header>
      <main>
        {loading && (
          <div className="text-center my-8">
            <i className="fas fa-spinner fa-spin fa-2x"></i>
          </div>
        )}
        {cocktails.length > 0 ? (
          <CocktailList cocktails={cocktails} />
        ) : (
          !loading && (
            <h2 className="text-center my-8">
              No cocktails matched your search query
            </h2>
          )
        )}
      </main>
    </div>
  );
}

export default App;
