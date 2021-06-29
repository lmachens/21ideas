import React from 'react';
import GridImage from './GridImage';

export default {
  title: 'Component/GridImage',
  component: GridImage,
};

export const Pancakes = (): JSX.Element => <GridImage imgSrc="/pancakes.jpg" />;

export const Ramen = (): JSX.Element => <GridImage imgSrc="/ramen.jpg" />;

export const Pizza = (): JSX.Element => <GridImage imgSrc="/pizza.jpg" />;

export const Vegetables = (): JSX.Element => (
  <GridImage imgSrc="/vegetables.jpg" />
);

export const Soup = (): JSX.Element => <GridImage imgSrc="/soup.jpg" />;

export const Salad = (): JSX.Element => <GridImage imgSrc="/salad.jpg" />;
