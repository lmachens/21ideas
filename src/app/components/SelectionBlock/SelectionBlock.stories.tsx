import React from 'react';
import MealSelection from '../MealSelection/MealSelection';
import styles from './SelectionBlock.module.css';

export default {
  title: 'Component/Link',
  component: 'SelectionBlock',
};

export const SelectionBlockContainer = (): JSX.Element => (
  <div className={styles.selectionBlock}>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <p></p>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <p></p>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <p></p>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <p></p>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <p></p>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <p></p>
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
    <MealSelection link={`/search`} />
  </div>
);
