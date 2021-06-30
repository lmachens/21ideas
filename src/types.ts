export type ErrorMessage = {
  message: string;
};

export type Query = {
  meal: string;
};

export type Meal = {
  name: string;
  ingredientsAmount: {
    ingredient: string;
    measure: string;
  };
  instructions: string;
};

export type Recipe = {
  id: string;
  name: string;
  ingredients: string;
  instructions: string;
};

export type Meals = {
  idMeal: string;
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
