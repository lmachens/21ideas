import React from 'react';
import BackIcon from '../BackButton/BackButton';
import HomeIcon from '../Icons/HomeIcon';
import NavBarLink from '../NavBarLink/NavBarLink';
import styles from './NavBar.module.css';

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <NavBarLink icon={<BackIcon />} link="#" />
      <NavBarLink icon={<HomeIcon />} link="/" />
    </div>
  );
}

export default NavBar;
