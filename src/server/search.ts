import fetch from 'node-fetch';
import { ErrorMessage } from '../types';

export type Query = {
  recipeName: string;
};

async function searchMeals(recipeName: string): Promise<[]> {
  let apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  if (recipeName) {
    apiURL += `${recipeName}`;
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

export default searchMeals;
