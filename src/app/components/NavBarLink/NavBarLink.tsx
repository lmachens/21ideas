import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBarLink.module.css';

type NavBarLinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
};

export default function NavBarLink({
  icon,
  link,
}: NavBarLinkProps): JSX.Element {
  return (
    <Link className={styles.navBarLink} to={link}>
      {icon}
    </Link>
  );
}
