import React from 'react';
import MealSearch from './MealSearch';

export default {
  title: 'Component/MealSearch',
  component: MealSearch,
};

export const DefaultSearch = (): JSX.Element => (
  <MealSearch onSubmit={console.log} />
);
