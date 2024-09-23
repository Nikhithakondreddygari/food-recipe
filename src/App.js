import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import RecipeCard from './Components/RecipeCard';
import './App.css';

const App = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const YOUR_APP_ID = "885f7087";
  const YOUR_APP_KEY = "921ba3fa613f0425ca0255b98af0f513";

  const fetchMeals = useCallback(() => {
    if (!query) return;

    const URL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`;

    axios.get(URL)
      .then(res => {
        console.log(res.data);
        const fetchedMeals = res.data.hits;
        if (Array.isArray(fetchedMeals)) {
          setMeals(fetchedMeals);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for meals"
      /><br />
      <button onClick={fetchMeals}>Search</button>
      {meals.length > 0 && <RecipeCard meals={meals} />}
    </div>
  );
};

export default App;