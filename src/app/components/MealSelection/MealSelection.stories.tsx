import React from 'react';
import MealSelection from './MealSelection';

export default {
  title: 'Component/Link',
  component: MealSelection,
};

export const MealSelect = (): JSX.Element => <MealSelection link={`/search`} />;
