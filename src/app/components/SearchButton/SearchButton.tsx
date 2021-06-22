import React, { ReactNode } from 'react';
import styles from './SearchButton.module.css';

type SearchButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function SearchButton({ children, onClick }: SearchButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
export default SearchButton;
