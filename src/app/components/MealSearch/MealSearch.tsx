import React, { useState } from 'react';
import SearchField from '../SearchField/SearchField';
import SearchButton from '../SearchButton/SearchButton';
import styles from './MealSearch.module.css';

type MealSearchProps = {
  onSubmit: (searchValue: string) => void;
};

function MealSearch({ onSubmit }: MealSearchProps): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.searchContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(search);
        }}
        className={styles.searchForm}
      >
        <SearchField
          value={search}
          onChange={setSearch}
          placeholder="Search..."
        />
        <SearchButton>Search</SearchButton>
      </form>
    </div>
  );
}

export default MealSearch;
