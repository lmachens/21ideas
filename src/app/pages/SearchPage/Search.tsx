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

export function Search(): JSX.Element {
  const [meals, setMeals] = useState<Meals | null>(null);

  async function handleSearch(mealName: string) {
    const response = await fetch(`/api/search/?mealName=${mealName}`);
    const searchedMeals = await response.json();
    setMeals(searchedMeals);
  }

  function handleClick() {
    function parseChoiceFromLocalStorage() {
      const json = localStorage.getItem('recipe');
      if (json === null) {
        return {};
      }
      const data = JSON.parse(json);
      return data;
    }

    const recipe = parseChoiceFromLocalStorage();

    if (meals) {
      recipe[meals] = { name: mealName };
    }

    localStorage.setItem('recipe', JSON.stringify(recipe));

    return (
      <div className={styles.container}>
        <NavBar />
        <MealSearch onSubmit={handleSearch} />
        {meals?.meals.map((meal) => {
          return (
            <div className={styles.container__results}>
              <a onClick={handleClick}>{meal.strMeal}</a>
            </div>
          );
        })}
      </div>
    );
  }
}
