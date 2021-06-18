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
