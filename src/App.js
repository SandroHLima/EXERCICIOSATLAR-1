import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, SearchBar, Input, Button, RecipeCard, Loading, Modal, ModalContent, CloseButton, Suggestion } from './components/StyledComponents';

// Simple fuzzy matching function to calculate Levenshtein distance
const getLevenshteinDistance = (a, b) => {
  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }
  return matrix[b.length][a.length];
};

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allMealNames, setAllMealNames] = useState([]);
  const [suggestion, setSuggestion] = useState('');

  // Fetch all meal names for fuzzy matching
  useEffect(() => {
    const fetchAllMeals = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const meals = response.data.meals || [];
        const mealNames = meals.map(meal => meal.strMeal.toLowerCase());
        setAllMealNames(mealNames);
      } catch (error) {
        console.error('Error fetching all meals:', error);
      }
    };
    fetchAllMeals();
  }, []);

  const fetchRecipes = async (searchQuery = query) => {
    if (!searchQuery) return;
    setLoading(true);
    setSuggestion('');
    try {
      // Search by meal name
      const mealResponse = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const meals = mealResponse.data.meals || [];

      // Search by ingredient as a fallback
      const ingredientResponse = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchQuery}`
      );
      const ingredientMeals = ingredientResponse.data.meals || [];

      // Combine and deduplicate results
      const combinedMeals = [...meals];
      ingredientMeals.forEach(meal => {
        if (!combinedMeals.some(m => m.idMeal === meal.idMeal)) {
          combinedMeals.push(meal);
        }
      });

      // Fetch full details for each meal from ingredient search
      const detailedMeals = [];
      for (const meal of combinedMeals) {
        if (!meal.strInstructions) {
          const detailResponse = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
          );
          const detailedMeal = detailResponse.data.meals ? detailResponse.data.meals[0] : null;
          if (detailedMeal) detailedMeals.push(detailedMeal);
        } else {
          detailedMeals.push(meal);
        }
      }

      // If no results, suggest a similar meal name
      if (detailedMeals.length === 0 && allMealNames.length > 0) {
        const lowerQuery = searchQuery.toLowerCase();
        const distances = allMealNames.map(name => ({
          name,
          distance: getLevenshteinDistance(lowerQuery, name),
        }));
        distances.sort((a, b) => a.distance - b.distance);
        if (distances[0].distance <= 3) { // Threshold for suggestion
          setSuggestion(distances[0].name);
        }
      }

      setRecipes(detailedMeals);
    } catch (error) {
      console.error('Error fetching recipes:', error.response ? error.response.data : error.message);
      setRecipes([]);
      alert('Failed to fetch recipes. Please check your input or try again later.');
    }
    setLoading(false);
  };

  const fetchRecipeDetails = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() && measure && measure.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      } else if (ingredient && ingredient.trim()) {
        ingredients.push(ingredient);
      }
    }

    setSelectedRecipe({
      label: recipe.strMeal,
      image: recipe.strMealThumb,
      ingredientLines: ingredients,
      instructions: recipe.strInstructions,
      url: recipe.strSource || `https://www.themealdb.com/meal.php?c=${recipe.idMeal}`,
    });
  };

  useEffect(() => {
    setQuery('chicken');
    fetchRecipes('chicken');
  }, []);

  const handleSuggestionClick = () => {
    setQuery(suggestion);
    fetchRecipes(suggestion);
  };

  return (
    <Container>
      <h1>Recipe Finder</h1>
      <SearchBar>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter ingredients or dish name..."
        />
        <Button onClick={() => fetchRecipes()}>Search</Button>
      </SearchBar>
      {suggestion && recipes.length === 0 && !loading && (
        <Suggestion>
          Did you mean: <span onClick={handleSuggestionClick} style={{ cursor: 'pointer', color: '#007bff' }}>{suggestion}</span>?
        </Suggestion>
      )}
      {loading ? (
        <Loading>Loading recipes...</Loading>
      ) : recipes.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} onClick={() => fetchRecipeDetails(recipe)}>
              <h3>{recipe.strMeal}</h3>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', borderRadius: '8px' }} />
            </RecipeCard>
          ))}
        </div>
      ) : (
        <p>No recipes found. Try a different search!</p>
      )}
      {selectedRecipe && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setSelectedRecipe(null)}>×</CloseButton>
            <h2>{selectedRecipe.label}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.label} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>Ingredients:</h3>
            <ul>
              {selectedRecipe.ingredientLines.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedRecipe.instructions}</p>
            {selectedRecipe.url && (
              <p>More details: <a href={selectedRecipe.url} target="_blank" rel="noopener noreferrer">here</a></p>
            )}
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
}

export default App;