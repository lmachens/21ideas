import React from 'react';
import GridImage from '../../components/GridImage/GridImage';
import styles from './LandingPage.module.css';

function LandingPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>21 Ideas</h2>
        <h3>Your Meal Planner For The Week</h3>
      </header>
      <div className={styles.gridComponent}>
        <GridImage imgSrc="/pizza.jpg"></GridImage>
        <GridImage imgSrc="/vegetables.jpg"></GridImage>
        <GridImage imgSrc="/soup.jpg"></GridImage>
        <GridImage imgSrc="/salad.jpg"></GridImage>
        <GridImage imgSrc="/ramen.jpg"></GridImage>
        <GridImage imgSrc="/pancakes.jpg"></GridImage>
      </div>
    </div>
  );
}

export default LandingPage;
