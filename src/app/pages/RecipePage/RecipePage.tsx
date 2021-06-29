import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { Recipe } from '../../../types';
import styles from './RecipePage.module.css';

function RecipePage(): JSX.Element {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('/api/recipes')
      .then((response) => response.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            headline={recipe.headline}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
          />
        ))}
      </main>
    </div>
  );
}

export default RecipePage;
