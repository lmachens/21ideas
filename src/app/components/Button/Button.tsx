import React from 'react';
import styles from './Button.module.css';

function Button(): JSX.Element {
  return (
    <button className={styles.button} onClick={() => alert('Hello World!')}>
      Test me!
    </button>
  );
}

export default Button;
