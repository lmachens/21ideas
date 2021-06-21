import React from 'react';
import styles from './SearchField.module.css';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

function SearchField({
  placeholder,
  value,
  onChange,
}: InputProps): JSX.Element {
  return (
    <label className={styles.label}>
      <div className={styles.label__container}>
        <input
          className={styles.label__input}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </label>
  );
}

export default SearchField;
