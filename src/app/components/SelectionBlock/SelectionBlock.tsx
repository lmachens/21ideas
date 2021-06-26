import React from 'react';
import MealSelection from '../MealSelection/MealSelection';
import styles from './SelectionBlock.module.css';

function SelectionBlock(): JSX.Element {
  return (
    <div className={styles.selectionBlock}>
      <MealSelection link="./search" />
      <MealSelection link="./search" />
      <MealSelection link="./search" />
      <br />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <br />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <br />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <br />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <br />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <br />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
      <MealSelection link={`/search`} />
    </div>
  );
}

export default SelectionBlock;
