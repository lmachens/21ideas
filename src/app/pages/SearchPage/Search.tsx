import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Search.module.css';
import MealSearch from '../../components/MealSearch/MealSearch';

type Meals = {
  meals: [
    {
      strMeal: string;
      strIngredient: string;
      strMeasure: string;
      strInstructions: string;
    }
  ];
};

function Search(): JSX.Element {
  const [meals, setMeals] = useState<Meals | null>(null);

  async function handleSearch(mealName: string) {
    const response = await fetch(`/api/search/?mealName=${mealName}`);
    const searchedMeals = await response.json();
    setMeals(searchedMeals);
  }
  return (
    <div className={styles.container}>
      <NavBar />
      <MealSearch onSubmit={handleSearch} />
      {meals?.meals.map((meal) => {
        return (
          <div className={styles.container__results}>
            <a>{meal.strMeal}</a>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
