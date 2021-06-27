import React from 'react';
import styles from './HomePage.module.css';
import SelectionBlockContainer from '../../components/SelectionBlock/SelectionBlock';
import DaysAndMeals from '../../components/DaysAndMeals/DaysAndMeals';

function HomePage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h4>Select your meals</h4>
      </header>
      <div className={styles.daysAndMeals}>
        <DaysAndMeals />
      </div>
      <div className={styles.selectionBlock}>
        <SelectionBlockContainer />
      </div>
    </div>
  );
}

export default HomePage;
