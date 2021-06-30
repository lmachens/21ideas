import React from 'react';
import MealSelection from '../MealSelection/MealSelection';
import styles from './SelectionBlock.module.css';

function SelectionBlock(): JSX.Element {
  return (
    <div className={styles.selectionBlock}>
      <div>
        <MealSelection link="/search?day=monday&time=breakfast" />
        <MealSelection link="/search?day=monday&time=lunch" />
        <MealSelection link="/search?day=monday&time=dinner" />
      </div>
      <div>
        <MealSelection link="/search?day=tuesday&time=breakfast" />
        <MealSelection link="/search?day=tuesday&time=lunch" />
        <MealSelection link="/search?day=tuesday&time=dinner" />
      </div>
      <div>
        <MealSelection link="/search?day=wednesday&time=breakfast" />
        <MealSelection link="/search?day=wednesday&time=lunch" />
        <MealSelection link="/search?day=wednesday&time=dinner" />
      </div>
      <div>
        <MealSelection link="/search?day=thursday&time=breakfast" />
        <MealSelection link="/search?day=thursday&time=lunch" />
        <MealSelection link="/search?day=thursday&time=dinner" />
      </div>
      <div>
        <MealSelection link="/search?day=friday&time=breakfast" />
        <MealSelection link="/search?day=friday&time=lunch" />
        <MealSelection link="/search?day=friday&time=dinner" />
      </div>
      <div>
        <MealSelection link="/search?day=saturday&time=breakfast" />
        <MealSelection link="/search?day=saturday&time=lunch" />
        <MealSelection link="/search?day=saturday&time=dinner" />
      </div>
      <div>
        <MealSelection link="/search?day=sunday&time=breakfast" />
        <MealSelection link="/search?day=sunday&time=lunch" />
        <MealSelection link="/search?day=sunday&time=dinner" />
      </div>
    </div>
  );
}

export default SelectionBlock;
