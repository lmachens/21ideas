import React, { ReactNode } from 'react';
import styles from './SelectButton.module.css';

type SelectButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function SelectButton({ children, onClick }: SelectButtonProps): JSX.Element {
  return (
    <button className={styles.selectButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default SelectButton;
