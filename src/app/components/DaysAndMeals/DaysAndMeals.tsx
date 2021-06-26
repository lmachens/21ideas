import React from 'react';
import styles from './DaysAndMeals.module.css';

function DaysAndMeals(): JSX.Element {
  return (
    <div className={styles.daysAndMeals}>
      <span className={styles.weekday}>Monday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
      <span className={styles.weekday}>Tuesday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
      <span className={styles.weekday}>Wednesday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
      <span className={styles.weekday}>Thursday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
      <span className={styles.weekday}>Friday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
      <span className={styles.weekday}>Saturday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
      <span className={styles.weekday}>Sunday</span>
      <span className={styles.meals}>
        <span>Breakfast</span>
        <span>Lunch</span>
        <span>Dinner</span>
      </span>
      <p></p>
    </div>
  );
}

export default DaysAndMeals;
