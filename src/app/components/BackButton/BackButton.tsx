import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './BackButton.module.css';
import BackIcon from '../Icons/BackIcon';

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <BackIcon />
    </button>
  );
}

export default BackButton;
