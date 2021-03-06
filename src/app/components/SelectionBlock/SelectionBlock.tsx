import React from 'react';
import MealSelection from '../MealSelection/MealSelection';
import styles from './SelectionBlock.module.css';

function SelectionBlock(): JSX.Element {
  return (
    <div className={styles.selectionBlock}>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
      <div>
        <MealSelection link="./search" />
        <MealSelection link="./search" />
        <MealSelection link="./search" />
      </div>
    </div>
  );
}

export default SelectionBlock;
