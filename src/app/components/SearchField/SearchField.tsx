import React from 'react';
import styles from './SearchField.module.css';

type InputProps = {
  placeholder: string;
  onChange: (value: string) => void;
};

function SearchField({ placeholder }: InputProps): JSX.Element {
  return (
    <label className={styles.label}>
      <input className={styles.label__input} placeholder={placeholder} />
    </label>
  );
}

export default SearchField;
