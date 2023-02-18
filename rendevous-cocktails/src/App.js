import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailList from "./Components/CocktailList";
import CocktailDetails from "./Components/CocktailDetails";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchCocktails = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      setCocktails(data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div className="container mx-auto my-10">
        <Routes>
          <Route
            path="/"
            element={
              <CocktailList
                cocktails={cocktails}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                searchCocktails={searchCocktails}
              />
            }
          />
          <Route path="/cocktail/:id" element={<CocktailDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
