import React from 'react';
import RecipePage from './RecipePage';

export default {
  title: 'Page/RecipePage',
  component: RecipePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = (): JSX.Element => <RecipePage />;
