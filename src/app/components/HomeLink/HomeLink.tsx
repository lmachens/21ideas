import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeLink.module.css';

type HomeLinkProps = {
  icon: React.SVGProps<SVGSVGElement>;
  link: string;
};

function HomeLink({ icon }: HomeLinkProps): JSX.Element {
  return (
    <Link to="/" className={styles.homeLink}>
      {icon}
    </Link>
  );
}

export default HomeLink;
