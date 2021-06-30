import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Meals } from '../../../types';
import styles from './RecipePage.module.css';

function RecipePage(): JSX.Element {
  const [recipes, setRecipes] = useState<Meals[]>([]);

  useEffect(() => {
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((recipes) => setRecipes(recipes));
  }, []);
  console.log(recipes);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            strMeal={recipe.strMeal}
            strIngredient1={recipe.strIngredient1}
            strIngredient2={recipe.strIngredient2}
            strIngredient3={recipe.strIngredient3}
            strIngredient4={recipe.strIngredient4}
            strIngredient5={recipe.strIngredient5}
            strIngredient6={recipe.strIngredient6}
            strIngredient7={recipe.strIngredient7}
            strIngredient8={recipe.strIngredient8}
            strMeasure1={recipe.strMeasure1}
            strMeasure2={recipe.strMeasure2}
            strMeasure3={recipe.strMeasure3}
            strMeasure4={recipe.strMeasure4}
            strMeasure5={recipe.strMeasure5}
            strMeasure6={recipe.strMeasure6}
            strMeasure7={recipe.strMeasure7}
            strMeasure8={recipe.strMeasure8}
            strInstructions={recipe.strInstructions}
          />
        ))}
      </main>
    </div>
  );
}

export default RecipePage;
