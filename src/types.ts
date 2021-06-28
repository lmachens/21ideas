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
  id: number;
  headline: string;
  ingredients: string;
  instructions: string;
};
