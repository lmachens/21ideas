import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './Search.module.css';
import MealSearch from '../../components/MealSearch/MealSearch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useLocation } from 'react-router-dom';

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

type DayPlan = {
  breakfast?: string;
  lunch?: string;
  dinner?: string;
};
type MealPlan = {
  monday?: DayPlan;
  tuesday?: DayPlan;
  wednesday?: DayPlan;
  thursday?: DayPlan;
  friday?: DayPlan;
  saturday?: DayPlan;
  sunday?: DayPlan;
};

export function Search(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const day = searchParams.get('day');
  const time = searchParams.get('time');

  const [meals, setMeals] = useState<Meals | null>(null);
  const [mealPlan, setMealPlan] = useLocalStorage<MealPlan>('recipes', {});

  async function handleSearch(mealName: string) {
    const response = await fetch(`/api/search/?mealName=${mealName}`);
    const searchedMeals = await response.json();
    setMeals(searchedMeals);
  }

  function selectMealName(mealName: string) {
    const newMealPlan = { ...mealPlan };
    if (
      day === 'monday' ||
      day === 'tuesday' ||
      day === 'wednesday' ||
      day === 'thursday' ||
      day === 'friday' ||
      day === 'saturday' ||
      day === 'sunday'
    ) {
      if (time === 'breakfast' || time === 'lunch' || time === 'dinner') {
        newMealPlan[day] = {
          ...newMealPlan[day],
          [time]: mealName,
        };
        setMealPlan(newMealPlan);
      }
    }
  }

  return (
    <div className={styles.container}>
      <NavBar />
      <MealSearch onSubmit={handleSearch} />
      {meals?.meals.map((meal) => {
        return (
          <button
            key={meal.strMeal}
            onClick={() => selectMealName(meal.strMeal)}
          >
            {meal.strMeal}
          </button>
        );
      })}
    </div>
  );
}

export default Search;
