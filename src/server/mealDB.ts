import fetch from 'node-fetch';
import { ErrorMessage } from '../types';

export type Query = {
  mealName: string;
};

export async function searchMeals(mealName: string): Promise<[]> {
  let apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  if (mealName) {
    apiURL += `${mealName}`;
  }
  const response = await fetch(apiURL);
  if (!response.ok) {
    const errorMessage: ErrorMessage = await response.json();
    console.log(errorMessage);
    throw {
      message: errorMessage.message,
    };
  }
  const result = await response.json();
  return result;
}
