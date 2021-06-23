import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.css';

type HomeLinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
};

function HomeLink({ icon, link }: HomeLinkProps): JSX.Element {
  return (
    <Link to={link} className={styles.homeLink}>
      {icon}
    </Link>
  );
}

export default HomeLink;
