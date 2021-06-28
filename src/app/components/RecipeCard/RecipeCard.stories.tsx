import React from 'react';
import RecipeCard from './RecipeCard';

export default {
  title: 'Component/RecipeCard',
  component: RecipeCard,
};

export const Pancakes = (): JSX.Element => (
  <RecipeCard
    headline="Pancake"
    ingredients="Flour, Eggs, Sunflower Oil, Sugar, Raspberries, Blueberries"
    instructions="Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.\r\nServe with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
  />
);
