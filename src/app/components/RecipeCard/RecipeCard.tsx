import React from 'react';
import styles from './RecipeCard.module.css';

type RecipeCardProps = {
  headline: string;
  ingredients: string;
  instructions: string;
};

function RecipeCard({
  headline,
  ingredients,
  instructions,
}: RecipeCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h3 className={styles.headline}>{headline}</h3>
      <p className={styles.ingredients}>{ingredients}</p>
      <p className={styles.instructions}>{instructions}</p>
    </div>
  );
}

export default RecipeCard;
