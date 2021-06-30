import React from 'react';
import styles from './RecipeCard.module.css';

type RecipeCardProps = {
  strMeal: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strInstructions: string;
};

function RecipeCard({
  strMeal,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strIngredient6,
  strIngredient7,
  strIngredient8,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5,
  strMeasure6,
  strMeasure7,
  strMeasure8,
  strInstructions,
}: RecipeCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h3 className={styles.headline}>{strMeal}</h3>
      <div className={styles.ingredients}>
        <p className={styles.ingredients}>{strIngredient1}</p>
        <p className={styles.ingredients}>{strIngredient2}</p>
        <p className={styles.ingredients}>{strIngredient3}</p>
        <p className={styles.ingredients}>{strIngredient4}</p>
        <p className={styles.ingredients}>{strIngredient5}</p>
        <p className={styles.ingredients}>{strIngredient6}</p>
        <p className={styles.ingredients}>{strIngredient7}</p>
        <p className={styles.ingredients}>{strIngredient8}</p>
      </div>
      <div className={styles.measures}>
        <p className={styles.ingredients}>{strMeasure1}</p>
        <p className={styles.ingredients}>{strMeasure2}</p>
        <p className={styles.ingredients}>{strMeasure3}</p>
        <p className={styles.ingredients}>{strMeasure4}</p>
        <p className={styles.ingredients}>{strMeasure5}</p>
        <p className={styles.ingredients}>{strMeasure6}</p>
        <p className={styles.ingredients}>{strMeasure7}</p>
        <p className={styles.ingredients}>{strMeasure8}</p>
      </div>
      <p className={styles.instructions}>{strInstructions}</p>
    </div>
  );
}

export default RecipeCard;
