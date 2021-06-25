import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MealSelection.module.css';

type MealSelectionLinkProps = {
  link: string;
};

function MealSelection({ link }: MealSelectionLinkProps): JSX.Element {
  return (
    <Link to={link} className={styles.mealSelection}>
      Select
    </Link>
  );
}

export default MealSelection;
