
import React from "react";
import "./App.css";

const recipes = [
  {
    id: 1,
    title: "Tomato Rice",
    ingredients: ["Rice", "Tomato", "Onion", "Oil", "Salt"],
  },
  {
    id: 2,
    title: "Vegetable Salad",
    ingredients: ["Carrot", "Cucumber", "Tomato", "Onion"],
  },
  {
    id: 3,
    title: "Pasta",
    ingredients: ["Pasta", "Tomato Sauce", "Cheese", "Salt"],
  },
];

function Recipe({ title, ingredients }) {
  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Recipe Cards</h1>
      <div className="recipe-container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            ingredients={recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
