import React from 'react';
import styles from './GridImage.module.css';

type GridImageProps = {
  imgSrc: string;
};

function GridImage({ imgSrc }: GridImageProps): JSX.Element {
  return <img className={styles.gridImage} src={imgSrc} alt="Meal picture" />;
}

export default GridImage;
