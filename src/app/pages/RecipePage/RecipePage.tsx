import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import styles from './RecipePage.module.css';

function RecipePage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavBar />
      </header>
      <main className={styles.main}>
        <RecipeCard
          headline="Pancakes"
          ingredients="Flour, Eggs, Sunflower Oil, Sugar, Raspberries, Blueberries"
          instructions="Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
        />
      </main>
    </div>
  );
}

export default RecipePage;
